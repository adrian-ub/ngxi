import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsMedicalPackAltIcon],svg[game-icons-medical-pack-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 46c-33.24 0-60 26.76-60 60v300c0 33.24 26.76 60 60 60h360c33.24 0 60-26.76 60-60V106c0-33.24-26.76-60-60-60zm0 60h360v300H76zm150 60v60h-60v60h60v60h60v-60h60v-60h-60v-60z"></svg:path>`,
})
export class GameIconsMedicalPackAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
