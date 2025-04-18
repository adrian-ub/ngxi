import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeStorageIcon],svg[material-symbols-light-home-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.846 19.385l-1.673-10h15.654l-1.673 10zm4.154-5.5h4q.213 0 .356-.144q.144-.144.144-.357t-.144-.356t-.356-.144h-4q-.213 0-.356.145t-.144.356t.144.356t.356.143M6 8q-.213 0-.356-.144T5.5 7.499t.144-.356T6 7h12q.213 0 .356.144t.144.357t-.144.356T18 8zm2-2.384q-.213 0-.356-.144T7.5 5.115t.144-.356q.143-.144.356-.144h8q.213 0 .356.144t.144.357t-.144.356t-.356.144z"></svg:path>`,
})
export class MaterialSymbolsLightHomeStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
