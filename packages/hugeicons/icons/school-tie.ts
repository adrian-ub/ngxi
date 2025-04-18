import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolTieIcon],svg[hugeicons-school-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.946 6L9.584 17.086c-.188.882-.085 1.212.563 1.846l2.62 2.561c.346.338.518.507.733.507s.387-.169.733-.507l2.62-2.561c.648-.634.751-.964.563-1.846L15.054 6m-4.497-2.876c-.068-.524-.101-.786.052-.955c.154-.169.426-.169.97-.169h3.843c.543 0 .815 0 .969.17c.153.168.12.43.052.954l-.05.395c-.143 1.108-.214 1.662-.57 2.021q-.088.089-.188.161C15.224 6 14.649 6 13.5 6c-1.15 0-1.724 0-2.135-.299a1.5 1.5 0 0 1-.187-.16c-.357-.36-.428-.914-.57-2.022z"></svg:path><svg:path d="M10 15c-.608.693-1.122 1-1.5 1c-.484 0-1.356-1.22-1.743-2.105c-.182-.414-.273-.622-.255-.884c.018-.263.137-.454.375-.838C8.222 10.003 10.515 8.02 12 6"></svg:path></svg:g>`,
})
export class HugeiconsSchoolTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
