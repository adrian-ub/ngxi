import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeKustoIcon],svg[vscode-icons-file-type-kusto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="15.433" height="2.796" x=".55" y="22.339" fill="#b8d432" rx=".439" transform="rotate(-44.999 8.266 23.737)"></svg:rect><svg:rect width="9.859" height="2.796" x="1.372" y="16.382" fill="#b8d432" rx=".439" transform="rotate(-44.999 6.301 17.78)"></svg:rect><svg:rect width="9.859" height="2.796" x="9.232" y="24.301" fill="#b8d432" rx=".439" transform="rotate(-44.999 14.162 25.7)"></svg:rect><svg:path fill="#0078d4" d="M30 2H2l28 27.999z"></svg:path><svg:path fill="#59b4d9" d="m10.282 10.282l11.436 11.436L30 13.436V2H18.564z"></svg:path><svg:path fill="#fff" d="M30 29.999V2L16 16z" opacity=".2"></svg:path><svg:rect width="2.796" height="2.796" x="16.226" y="9.001" fill="#fff" rx=".622" transform="rotate(-44.999 17.623 10.4)"></svg:rect><svg:rect width="2.796" height="2.796" x="20.18" y="5.048" fill="#fff" rx=".622" transform="rotate(-44.999 21.579 6.446)"></svg:rect><svg:rect width="2.796" height="2.796" x="20.18" y="12.955" fill="#fff" rx=".622" transform="rotate(-44.999 21.578 14.353)"></svg:rect><svg:rect width="2.796" height="2.796" x="24.133" y="9.002" fill="#fff" rx=".622" transform="rotate(-44.999 25.531 10.4)"></svg:rect>`,
})
export class VscodeIconsFileTypeKustoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
