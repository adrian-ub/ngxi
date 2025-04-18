import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToHomeScreenOutlineRoundedIcon],svg[material-symbols-light-add-to-home-screen-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.616 22q-.672 0-1.144-.472T7 20.385v-2.808q0-.213.143-.357t.357-.143t.357.143t.143.357v.923h10v-13H8v.923q0 .214-.143.357t-.357.143t-.357-.143T7 6.423V3.616q0-.672.472-1.144T8.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v16.769q0 .67-.472 1.143q-.472.472-1.143.472zM8 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm2.5-9.292l-5.746 5.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L9.792 9.5H6q-.213 0-.357-.143T5.5 9t.143-.357T6 8.5h4.692q.349 0 .578.23t.23.578V14q0 .214-.143.357T11 14.5t-.357-.143T10.5 14zM8 4.5h10v-.885q0-.23-.192-.423T17.384 3H8.616q-.231 0-.424.192T8 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightAddToHomeScreenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
