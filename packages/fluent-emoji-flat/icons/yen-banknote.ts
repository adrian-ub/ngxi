import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatYenBanknoteIcon],svg[fluent-emoji-flat-yen-banknote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3C07B" d="M2 10a2 2 0 0 1 2-2h10.528a2 2 0 0 1 .894.211l.684.342a2 2 0 0 0 1.788 0l.684-.342A2 2 0 0 1 19.472 8H28a2 2 0 0 1 2 2v14.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#B97028" d="M26 17a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill="#B97028" d="M3 11a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1z"></svg:path><svg:path fill="#B97028" d="M2 28a2 2 0 0 0 2 2h11l2-1l2 1h9a2 2 0 0 0 2-2v-4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#FFF478" d="M19 8h-4v19h4z"></svg:path><svg:path fill="#F3AD61" d="M19 26h-4v4h4z"></svg:path><svg:path fill="#F4F4F4" d="M7.437 12.257a.5.5 0 0 0-.874.486L8.928 17H7a.5.5 0 1 0 0 1h2v1H7a.5.5 0 1 0 0 1h2v1.5a.5.5 0 0 0 1 0V20h2a.5.5 0 0 0 0-1h-2v-1h2a.5.5 0 0 0 0-1h-1.928l2.365-4.257a.5.5 0 1 0-.874-.486L9.5 15.97z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatYenBanknoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
