import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabPanelIcon],svg[material-symbols-light-lab-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 20q-.672 0-1.144-.472T2 18.385v-3.77q0-.67.472-1.143Q2.944 13 3.616 13H4V8.321h-.192q-.354-.063-.581-.328Q3 7.73 3 7.346V6.077q0-.44.299-.74t.74-.298h4.923q.44 0 .739.299t.299.739v1.27q0 .382-.227.646q-.227.265-.58.328H9V13h6V8.321h-.192q-.354-.063-.581-.328Q14 7.73 14 7.346V6.077q0-.44.299-.74t.74-.298h4.922q.441 0 .74.299t.299.739v1.27q0 .382-.227.646q-.227.265-.58.328H20V13h.385q.67 0 1.143.472q.472.472.472 1.144v3.769q0 .67-.472 1.143q-.472.472-1.143.472zM16 13h3V8.385h-3zM5 13h3V8.385H5z"></svg:path>`,
})
export class MaterialSymbolsLightLabPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
