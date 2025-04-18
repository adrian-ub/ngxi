import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLightbulbCircleFilledIcon],svg[tdesign-lightbulb-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M12 4.5a4.956 4.956 0 0 0-4.95 4.95c0 .75.164 1.467.487 2.136c.564 1.168 1.184 2.493 1.683 3.914h5.56c.5-1.421 1.12-2.746 1.684-3.914a4.9 4.9 0 0 0 .486-2.136c0-2.73-2.22-4.95-4.95-4.95M9.5 17v2h5v-2z"></svg:path>`,
})
export class TdesignLightbulbCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
