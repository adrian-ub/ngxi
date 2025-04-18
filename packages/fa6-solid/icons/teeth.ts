import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTeethIcon],svg[fa6-solid-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128c0-53 43-96 96-96h384c53 0 96 43 96 96v256c0 53-43 96-96 96H96c-53 0-96-43-96-96zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56c0-26.5-21.5-48-48-48s-48 21.5-48 48m176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56c0-26.5-21.5-48-48-48M48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48m48 176c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48m80-48c0 26.5 21.5 48 48 48s48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24zm176 48c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48m80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48m48 176c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48"></svg:path>`,
})
export class Fa6SolidTeethIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
