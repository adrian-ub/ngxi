import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDollarBanknoteIcon],svg[fluent-emoji-flat-dollar-banknote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00F397" d="M2 10a2 2 0 0 1 2-2h11l2 1l2-1h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#008463" d="M3 11a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zM2 28a2 2 0 0 0 2 2h11l2-1l2 1h9a2 2 0 0 0 2-2v-4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm24-11a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill="#FFF478" d="M19 8h-4v19h4z"></svg:path><svg:path fill="#F3AD61" d="M19 26h-4v4h4z"></svg:path><svg:path fill="#fff" d="M9.5 12a.5.5 0 0 1 .5.5v.545c.834.152 1.517.678 1.824 1.375c.13.294-.122.58-.443.58c-.244 0-.448-.173-.587-.373C10.55 14.273 10.1 14 9.5 14c-.93 0-1.5.656-1.5 1.25s.57 1.25 1.5 1.25c1.38 0 2.5 1.007 2.5 2.25c0 1.088-.859 1.997-2 2.205v.545a.5.5 0 0 1-1 0v-.545c-.834-.152-1.517-.678-1.824-1.375c-.13-.294.122-.58.443-.58c.244 0 .448.173.587.373c.243.354.694.627 1.294.627c.93 0 1.5-.656 1.5-1.25s-.57-1.25-1.5-1.25c-1.38 0-2.5-1.007-2.5-2.25c0-1.088.859-1.996 2-2.205V12.5a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDollarBanknoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
