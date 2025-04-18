import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpermIcon],svg[hugeicons-sperm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.89 14.11c2.235 2.233 5.299 2.792 8.092 0c2.793-2.794 4.045-8.092 2.023-10.115c-2.023-2.022-7.321-.77-10.114 2.023s-2.234 5.857 0 8.091"></svg:path><svg:path d="M3 21c.413-.548 1.055-1.118 2.178-1.392c.894-.219 1.342-.328 1.508-.442c.335-.227.44-.41.459-.802c.01-.195-.096-.495-.306-1.097s-.315-.902-.306-1.097c.02-.392.124-.575.458-.803c.167-.113.614-.222 1.509-.44c.799-.196 1.286-.548 1.5-.927"></svg:path></svg:g>`,
})
export class HugeiconsSpermIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
