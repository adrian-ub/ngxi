import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderOpenRoundedIcon],svg[material-symbols-light-folder-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 19q-.633 0-1.066-.434Q3 18.133 3 17.5V6.616q0-.633.491-1.125Q3.983 5 4.615 5h4.31q.323 0 .628.13q.305.132.522.349L11.596 7h8.731q.214 0 .357.143t.143.357t-.143.357t-.357.143H7.447q-1.397 0-2.422.898T4 11.162v6.223q0 .211.106.346t.279.23l1.917-6.42q.162-.516.593-.836t.967-.32h12.823q.813 0 1.305.649q.49.649.254 1.426l-1.646 5.48q-.142.477-.545.769q-.403.291-.9.291z"></svg:path>`,
})
export class MaterialSymbolsLightFolderOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
