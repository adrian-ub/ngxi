import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFfmpegIcon],svg[file-icons-ffmpeg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.459 35.184L93.114 161.545v53.47L254.041 30.733L512 8.902L133.866 406.659l49.874 2.877l274.62-283.015v268.646l-30.716 28.864l78.027 4.612v74.455l-243.583-20.63l123.746-120.395v-59.74L209.185 478L0 460.29L336.764 93.876l-55.874 3.3L37.697 366.981V137.742l22.881-27.544l-56.254 3.326V51.871z"></svg:path>`,
})
export class FileIconsFfmpegIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
