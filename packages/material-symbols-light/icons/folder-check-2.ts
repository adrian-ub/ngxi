import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderCheck2Icon],svg[material-symbols-light-folder-check-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.308 13.692q1.67 0 2.835 1.165t1.165 2.835q0 1.672-1.165 2.836q-1.164 1.164-2.835 1.164t-2.836-1.164t-1.164-2.836q0-1.67 1.164-2.835t2.836-1.165M10.942 18q.02.256.037.506t.09.494H4.615q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.981l2 2h7.789q.69 0 1.153.463T21 8.616v3.87q-.817-.586-1.756-.882q-.938-.296-1.936-.296q-2.766 0-4.633 1.973T10.942 18m5.66 1.712l3.34-3.335l-.626-.627l-2.714 2.702L15.3 17.15l-.627.633z"></svg:path>`,
})
export class MaterialSymbolsLightFolderCheck2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
