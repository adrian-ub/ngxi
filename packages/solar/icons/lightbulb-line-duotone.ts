import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbLineDuotoneIcon],svg[solar-lightbulb-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69c-.487.601-.508.65-.63 1.413c-.039.237-.039.593-.039 1.307c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"></svg:path><svg:path d="M14.5 19.5h-5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 17v-2m0 0a2 2 0 0 0 1.732-1M12 15a2 2 0 0 1-1.732-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLightbulbLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
