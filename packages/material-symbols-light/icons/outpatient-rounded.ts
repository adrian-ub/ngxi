import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutpatientRoundedIcon],svg[material-symbols-light-outpatient-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.815 20q-.355 0-.585-.232T2 19.192V4.808q0-.343.232-.576T2.808 4h10.461q.344 0 .576.232t.232.576v14.384q0 .344-.232.576t-.576.232H9.923v-4.154h-3.77V20zm2.57-7.308h1.461v-1.461H5.385zm0-3.846h1.461V7.384H5.385zm3.846 3.846h1.461v-1.461H9.231zm0-3.846h1.461V7.384H9.231zm7 3.153q0-.213.143-.356t.357-.143h3.386l-1.246-1.246q-.14-.14-.15-.351t.15-.36q.146-.137.353-.137q.208 0 .342.14l1.888 1.888q.242.243.242.566t-.242.566l-1.888 1.888q-.136.134-.34.14q-.203.006-.349-.14q-.16-.14-.153-.351t.147-.357l1.246-1.246h-3.386q-.213 0-.357-.144t-.143-.357"></svg:path>`,
})
export class MaterialSymbolsLightOutpatientRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
