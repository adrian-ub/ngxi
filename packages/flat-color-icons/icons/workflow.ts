import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsWorkflowIcon],svg[flat-color-icons-workflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M7 31h10v10H7zm28.3-11.7l-5.6-5.6c-.4-.4-.4-1 0-1.4l5.6-5.6c.4-.4 1-.4 1.4 0l5.6 5.6c.4.4.4 1 0 1.4l-5.6 5.6c-.4.4-1 .4-1.4 0"></svg:path><svg:circle cx="12" cy="13" r="6" fill="#3F51B5"></svg:circle><svg:circle cx="36" cy="36" r="6" fill="#448AFF"></svg:circle><svg:g fill="#90A4AE"><svg:path d="M11 24h2v5h-2z"></svg:path><svg:path d="m12 21l-3 4h6z"></svg:path></svg:g><svg:g fill="#90A4AE"><svg:path d="M20 12h5v2h-5z"></svg:path><svg:path d="m28 13l-4-3v6z"></svg:path></svg:g><svg:g fill="#90A4AE"><svg:path d="M35 21h2v5h-2z"></svg:path><svg:path d="m36 29l3-4h-6z"></svg:path></svg:g>`,
})
export class FlatColorIconsWorkflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
