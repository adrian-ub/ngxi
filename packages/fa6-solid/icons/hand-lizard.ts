import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidHandLizardIcon],svg[fa6-solid-hand-lizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 112c0-26.5 21.5-48 48-48h238.5c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8v76c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-13.8L273.9 352H112c-26.5 0-48-21.5-48-48s21.5-48 48-48h128c26.5 0 48-21.5 48-48s-21.5-48-48-48H48c-26.5 0-48-21.5-48-48"></svg:path>`,
})
export class Fa6SolidHandLizardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
