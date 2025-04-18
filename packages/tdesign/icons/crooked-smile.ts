import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCrookedSmileIcon],svg[tdesign-crooked-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-.282 5.78l-.25.97c-.269 1.045-.793 1.895-1.613 2.467c-.806.563-1.792.783-2.855.783h-1v-2h1c.8 0 1.343-.167 1.71-.423c.353-.246.647-.646.822-1.326l.249-.969z"></svg:path>`,
})
export class TdesignCrookedSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
