import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeLightroomIcon],svg[file-icons-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm261.56 363.985H128v-256.93h41.89v218.298h98.47zm131.284-154.53c-14.662-.699-39.099 1.163-47.244 4.654v149.644h-42.124l.233-150.808c.04-7.74-.167-10.746-1.295-24.754c16.785-6.662 51.557-16.904 90.43-16.904z"></svg:path>`,
})
export class FileIconsAdobeLightroomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
