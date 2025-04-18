import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlockchain03Icon],svg[hugeicons-blockchain-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 19c.21 0 .404-.099.793-.297l3.13-1.59C17.308 16.409 18 16.057 18 15.5v-7M12 19c-.21 0-.404-.099-.793-.297l-3.13-1.59C6.692 16.409 6 16.057 6 15.5v-7M12 19v-7m6-3.5c0-.557-.692-.91-2.077-1.613l-3.13-1.59C12.404 5.099 12.21 5 12 5s-.404.099-.793.297l-3.13 1.59C6.692 7.591 6 7.943 6 8.5m12 0c0 .557-.692.91-2.077 1.613l-3.13 1.59c-.389.198-.584.297-.793.297M6 8.5c0 .557.692.91 2.077 1.613l3.13 1.59c.389.198.584.297.793.297"></svg:path><svg:path d="m13.19 21.576l4.694-2.272C19.961 18.3 21 17.796 21 17V7c0-.796-1.039-1.299-3.116-2.304L13.19 2.424h0C12.606 2.141 12.314 2 12 2s-.606.141-1.19.424L6.116 4.696C4.039 5.7 3 6.204 3 7v10c0 .796 1.039 1.299 3.116 2.304h0l4.694 2.272c.584.283.876.424 1.19.424s.606-.141 1.19-.424"></svg:path></svg:g>`,
})
export class HugeiconsBlockchain03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
