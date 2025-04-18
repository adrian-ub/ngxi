import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEditUser6Icon],svg[marketeq-edit-user-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.146 33.52l-10.23 10.23h-5.833v-5.833l10.23-10.23a2.084 2.084 0 0 1 2.916 0l2.917 2.917a2.084 2.084 0 0 1 0 2.917"></svg:path><svg:path stroke="#306CFE" d="M35.417 19.313q.015-.282 0-.563A12.5 12.5 0 1 0 22 31.25"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75c-9.27-.77-12.5-4.167-12.5-4.167V37.5a10.42 10.42 0 0 1 7.27-9.896"></svg:path></svg:g>`,
})
export class MarketeqEditUser6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
