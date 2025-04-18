import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolarEnergyOneIcon],svg[icon-park-solar-energy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M10 30H16C19.3137 30 22 32.6863 22 36C22 39.3137 19.3137 42 16 42H10V30Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 28V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 32H10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 38H10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 36H30C31.1046 36 32 35.1046 32 34V23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 4V11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22.8789 7.87891L27.1215 12.1215"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22.8789 25.1211L27.1215 20.8785"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.1211 7.87891L36.8785 12.1215"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.1211 25.1211L36.8785 20.8785"></svg:path><svg:circle cx="32" cy="17" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 17H26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 17H44"></svg:path></svg:g>`,
})
export class IconParkSolarEnergyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
