import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsCodeClimateIcon],svg[file-icons-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m342.766 113.36l-97.78 97.242l58.023 58.023l39.757-39.756l111.748 112.285L512 283.131zm-172.995 57.486L0 340.617l58.023 58.023l111.748-111.748L281.52 398.64l58.023-58.023z"></svg:path>`,
})
export class FileIconsCodeClimateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
