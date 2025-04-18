import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCampingChairIcon],svg[marketeq-camping-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 27.667V8.333a2.083 2.083 0 0 1 2.083-2.083h20.834A2.083 2.083 0 0 1 37.5 8.333v19.334m-25 0L35.417 43.75m2-16.02L14.583 43.75"></svg:path><svg:path stroke="#344054" d="M8.333 27.083a106.5 106.5 0 0 0 33.334 0"></svg:path></svg:g>`,
})
export class MarketeqCampingChairIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
