import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsLitLightIcon],svg[skill-icons-lit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F4ED" rx="60"></svg:rect><svg:path fill="#00E8FF" d="m88 148l20-60l90 90l-30 50l-40-40h-20"></svg:path><svg:path fill="#283198" d="M128 188v-80l40-40v80M48 188l40 40l20-40l-20-40H68"></svg:path><svg:path fill="#324FFF" d="M88 148V68l40-40v80m40 120v-80l40-40v80m-160 0v-80l40 40"></svg:path><svg:path fill="#0FF" d="M88 228v-80l40 40"></svg:path></svg:g>`,
})
export class SkillIconsLitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
