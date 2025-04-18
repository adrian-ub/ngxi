import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSportsGymnasticsRoundedIcon],svg[material-symbols-light-sports-gymnastics-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.47 20.992l-.181-9.242l-4.904-1.25H1.423q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h5.73l7.309-5.148q.17-.11.344-.079t.313.18q.14.174.116.377t-.194.34l-4.276 3.042l3.677.865l6.92-4.24q.14-.08.304-.062q.165.017.305.182q.14.153.12.348q-.022.195-.193.31l-7.629 5.789l-.719 9.608q-.025.207-.175.348t-.386.14q-.208 0-.357-.147t-.163-.36m-6.277-13.3q-.698 0-1.195-.498Q4.5 6.698 4.5 6t.497-1.195t1.195-.497t1.195.497T7.884 6t-.497 1.195t-1.195.497"></svg:path>`,
})
export class MaterialSymbolsLightSportsGymnasticsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
