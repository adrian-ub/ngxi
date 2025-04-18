import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemComponentsIcon],svg[tdesign-system-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-.663 0-1.222.548-1.222 1.25S11.337 6.5 12 6.5s1.222-.548 1.222-1.25S12.663 4 12 4M8.778 5.25C8.778 3.467 10.208 2 12 2c1.791 0 3.222 1.467 3.222 3.25A3.25 3.25 0 0 1 13 8.34v.836l3.849 2.25v4.457l.818.411a3.2 3.2 0 0 1 2.11-.794C21.57 15.5 23 16.967 23 18.75S21.569 22 19.778 22s-3.222-1.467-3.222-3.25q0-.379.082-.735l-.753-.378L12 19.908l-3.885-2.27l-.753.378q.082.355.082.734c0 1.783-1.43 3.25-3.222 3.25C2.431 22 1 20.533 1 18.75s1.431-3.25 3.222-3.25c.81 0 1.548.3 2.112.795l.817-.411v-4.458L11 9.176v-.835A3.25 3.25 0 0 1 8.778 5.25M12 10.908l-2.849 1.666v3.352L12 17.592l2.849-1.666v-3.352zm-6.775 7.126a1.22 1.22 0 0 0-1.003-.534C3.56 17.5 3 18.048 3 18.75S3.559 20 4.222 20c.664 0 1.222-.548 1.222-1.25q-.001-.22-.068-.416zm13.399.303a1.3 1.3 0 0 0-.068.413c0 .702.558 1.25 1.222 1.25S21 19.452 21 18.75s-.559-1.25-1.222-1.25c-.41 0-.779.209-1.002.533z"></svg:path>`,
})
export class TdesignSystemComponentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
