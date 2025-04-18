import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2BoldDuotoneIcon],svg[solar-adhesive-plaster-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.416 12.765l-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.885 12.234l.531.531q.27.271.494.566l-7.578 7.578a5.5 5.5 0 0 1-.567-.493l-.53-.531zM10.668 3.09q.297.224.567.494l.53.53l-7.65 7.651l-.53-.53q-.27-.27-.494-.567z"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.828" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.828 12)"></svg:circle>`,
})
export class SolarAdhesivePlaster2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
