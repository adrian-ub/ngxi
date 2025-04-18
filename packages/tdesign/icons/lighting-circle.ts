import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLightingCircleIcon],svg[tdesign-lighting-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-10.915 7.5H10v-5H6.29l5.625-10H14v5h3.71zM12 15.571l2.29-4.071H12V8.429L9.71 12.5H12z"></svg:path>`,
})
export class TdesignLightingCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
