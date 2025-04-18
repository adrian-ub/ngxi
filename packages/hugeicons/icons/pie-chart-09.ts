import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChart09Icon],svg[hugeicons-pie-chart-09-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.466 19.4c.98.99 1.67 1.67 2.62 1.67h.01c.11 0 .22-.01.34-.03c1.12-.18 1.54-1 2.13-2.16c.45-.9.78-1.86.98-2.86c.42-2.12.2-4.3-.61-6.3c-.82-2-2.18-3.69-3.96-4.9c-.86-.58-1.8-1.04-2.85-1.37c-1.19-.37-2.06-.64-2.97.04c-.91.69-.91 1.66-.91 3.28v4.56c0 1.32 0 2.04.29 2.75c.3.71.84 1.25 1.73 2.13zm-3.41-14.71c.1-.08.2-.12.35-.12h.01c.24 0 .61.1 1.31.32a9.35 9.35 0 0 1 5.81 5.39c.71 1.73.89 3.61.53 5.44a9.2 9.2 0 0 1-.85 2.48c-.54 1.06-.68 1.3-1.02 1.35s-.72-.27-1.67-1.22l-3.2-3.19c-.82-.81-1.23-1.22-1.4-1.64c-.18-.43-.18-1.01-.18-2.17V6.77c0-1.39.02-1.86.31-2.08m-9.81 9.13c0 4.83 3.93 8.75 8.75 8.75l-.01-.01c1.12 0 2.23-.21 3.28-.63c.39-.15.57-.59.42-.97a.736.736 0 0 0-.97-.42c-.87.35-1.79.53-2.72.53c-4 0-7.25-3.25-7.25-7.25c0-3.02 1.9-5.75 4.72-6.8c.39-.14.58-.57.44-.96a.744.744 0 0 0-.96-.44c-3.41 1.26-5.7 4.56-5.7 8.2" color="currentColor"></svg:path>`,
})
export class HugeiconsPieChart09Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
