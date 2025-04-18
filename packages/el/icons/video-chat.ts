import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elVideoChatIcon],svg[el-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 49.109v854.518h247.266v247.264L632.74 903.625H1200V49.109zm263.086 214.673h483.398v149.049l190.43-149.049v398.439l-190.43-149.049v149.047H263.086z"></svg:path>`,
})
export class ElVideoChatIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
