import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RevToggleKeyIcon],svg[fluent-mdl2-rev-toggle-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 512q155 0 294 58t249 167q109 109 167 248t58 295q0 106-27 204t-78 183t-120 156t-155 120t-184 77t-204 28H256v-128h896q88 0 170-23t153-64t129-100t100-130t65-153t23-170t-23-170t-64-153t-100-129t-130-100t-153-65t-170-23H331l426 427l-74 74l-566-565L683 11l74 74l-426 427z"></svg:path>`,
})
export class FluentMdl2RevToggleKeyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
