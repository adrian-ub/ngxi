import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoughnutIcon],svg[hugeicons-doughnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="m22 11.722l-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24l-.627.761m-8-.636l-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24L2 12.358"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.19-.18-2.352-.549-3.421c-.3-.871-.65-.766-1.529-.653c-1.295.166-2.625-.75-2.878-2.022c-.177-.887-.203-.863-1.108-.927c-.873-.063-1.68-.715-1.887-1.573C13.722 2.043 13.41 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class HugeiconsDoughnutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
