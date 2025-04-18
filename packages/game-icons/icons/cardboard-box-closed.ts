import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCardboardBoxClosedIcon],svg[game-icons-cardboard-box-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 73.32L74.6 155.1l82.3 37.1l173.2-85.5zm95.4 42.98l-173.2 85.5l77.8 35.1l181.4-81.8zM61.7 169v182L247 434.6v-182zm388.6 0L265 252.6v182L450.3 351z"></svg:path>`,
})
export class GameIconsCardboardBoxClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
