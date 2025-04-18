import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvDisplaysRoundedIcon],svg[material-symbols-light-tv-displays-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 15.327q-.213 0-.357-.143T3 14.827V4.616q0-.672.472-1.144T4.616 3h12.153q.214 0 .357.143t.143.357t-.143.357t-.357.143H4.616q-.27 0-.443.173T4 4.616v10.211q0 .214-.143.357t-.357.143M12.327 21q-.348 0-.578-.23t-.23-.578V19H8.385q-.69 0-1.153-.462t-.463-1.153v-9q0-.69.463-1.153t1.153-.463h12.019q.69 0 1.153.463t.462 1.153v9q0 .69-.462 1.153T20.404 19H17.25v1.192q0 .349-.23.578t-.578.23z"></svg:path>`,
})
export class MaterialSymbolsLightTvDisplaysRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
