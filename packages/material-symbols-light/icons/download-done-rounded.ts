import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDownloadDoneRoundedIcon],svg[material-symbols-light-download-done-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.55 13.766l8.412-8.412q.146-.146.347-.156t.366.156t.166.356t-.166.357l-8.56 8.56q-.242.242-.565.242t-.565-.242l-3.66-3.66q-.146-.146-.153-.347q-.006-.2.159-.366t.357-.165t.356.165zM6.5 19q-.213 0-.357-.143T6 18.5t.143-.357T6.5 18h11q.214 0 .357.143T18 18.5t-.143.357T17.5 19z"></svg:path>`,
})
export class MaterialSymbolsLightDownloadDoneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
