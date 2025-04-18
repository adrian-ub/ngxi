import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlaylistAddCheckRoundedIcon],svg[material-symbols-light-playlist-add-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.5q-.213 0-.356-.144t-.144-.357t.144-.356T4 14.5h6q.213 0 .356.144t.144.357t-.144.356T10 15.5zm0-4q-.213 0-.356-.144t-.144-.357t.144-.356T4 10.5h10q.213 0 .356.144t.144.357t-.144.356T14 11.5zm0-4q-.213 0-.356-.144T3.5 6.999t.144-.356T4 6.5h10q.213 0 .356.144t.144.357t-.144.356T14 7.5zm12.348 10.479q-.16 0-.296-.053t-.271-.188l-1.935-1.934q-.14-.14-.153-.342t.157-.37q.156-.156.347-.158q.192-.003.357.156l1.796 1.79l3.89-3.89q.147-.146.348-.152t.37.158q.156.166.158.354q.003.189-.162.354l-4.038 4.038q-.131.131-.27.184q-.14.053-.298.053"></svg:path>`,
})
export class MaterialSymbolsLightPlaylistAddCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
