import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarkHeartRoundedIcon],svg[material-symbols-light-bookmark-heart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.242q-.258-.32-.668-.503q-.409-.181-.87-.181q-.756 0-1.301.552t-.545 1.316q0 .403.108.745q.109.343.476.796q.3.39.834.93q.535.54 1.377 1.308q.13.128.28.174t.31.046t.31-.046t.28-.176q.834-.76 1.353-1.287q.52-.526.826-.92q.372-.458.493-.809t.121-.755q0-.766-.547-1.32q-.548-.554-1.306-.554q-.447 0-.861.182q-.415.182-.67.502m0 8.681l-3.739 1.608q-.807.348-1.534-.13Q6 17.926 6 17.053V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616v11.436q0 .873-.727 1.35t-1.535.129z"></svg:path>`,
})
export class MaterialSymbolsLightBookmarkHeartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
