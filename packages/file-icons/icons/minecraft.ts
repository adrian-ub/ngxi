import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMinecraftIcon],svg[file-icons-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h169.847v172.501H0zm340.775 0h170.094v172.501H340.775zm0 172.502H169.847v85.915H84.785V512h85.062v-86.668h170.928V512h85.866V258.417h-85.866z"></svg:path>`,
})
export class FileIconsMinecraftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
