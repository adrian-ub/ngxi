import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLaraveljetstreamIcon],svg[devicon-laraveljetstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6875f5" d="M64 0C28.652 0 0 28.652 0 64c0 23.02 12.152 43.195 30.387 54.473c41.343-17.817 70.402-58.715 70.937-106.47A63.73 63.73 0 0 0 64 0m58.36 37.691c-12.426 40.383-44.29 72.243-84.669 84.668A63.8 63.8 0 0 0 64 128c35.348 0 64-28.652 64-64c0-9.375-2.016-18.281-5.64-26.309m0 0"></svg:path>`,
})
export class DeviconLaraveljetstreamIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
