import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDungeonLightIcon],svg[game-icons-dungeon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 65c-4.37 0-8.74.485-13 1.469V151h26V66.469A57.8 57.8 0 0 0 128 65m-31 9.354C83.018 84.017 73 101.452 73 128v23h24zm62 0V151h24v-23c0-26.548-10.018-43.983-24-53.646m38.176 26.148C199.634 108.783 201 117.962 201 128v137H73.23L304 490h186V384zM73 169v78h24v-78zm42 0v78h26v-78zm44 0v78h24v-78z"></svg:path>`,
})
export class GameIconsDungeonLightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
