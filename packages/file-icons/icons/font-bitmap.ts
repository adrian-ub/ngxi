import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFontBitmapIcon],svg[file-icons-font-bitmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 35v115H406v362H297v-36h-44V150h-70v-39.5h-38V35h38v44h114v355h54V79h90V35H183V0h294v35zM72 150H36v74h36zm144 146v-72h-32v-74h-39v-39.5H72V150h40v74h37v36h-37v144h40v42h-46v-42H72V260H36v-36H0v72h36v144h36v36h34v36h110V404h-32V296z"></svg:path>`,
})
export class FileIconsFontBitmapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
