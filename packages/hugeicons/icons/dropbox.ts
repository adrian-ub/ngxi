import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDropboxIcon],svg[hugeicons-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 5.889l6.111 3.333L12 12.555L5.889 9.222zm-6.667 9.445v1.999c0 1.147.205 1.505 1.229 2.027l4.444 2.267c.976.498 1.012.498 1.988 0l4.444-2.267c1.024-.522 1.229-.88 1.229-2.027v-2"></svg:path><svg:path d="M14.596 3.29L12 5.636L9.404 3.289C8.488 2.462 8.03 2.048 7.47 2.004s-1.073.293-2.1.968L3.514 4.194c-.996.655-1.494.983-1.512 1.47s.454.853 1.399 1.585l2.416 1.873L3.4 10.995c-.945.732-1.418 1.098-1.4 1.585s.517.815 1.513 1.47l2.853 1.876c.548.36.821.54 1.12.516c.298-.023.542-.244 1.03-.685L12 12.607l2.596 2.348c.916.827 1.373 1.241 1.933 1.285s1.073-.293 2.1-.968l1.857-1.222c.997-.655 1.495-.983 1.514-1.47s-.455-.853-1.4-1.585l-2.416-1.873L20.6 7.249c.945-.732 1.418-1.098 1.4-1.585s-.517-.815-1.514-1.47l-1.858-1.222c-1.026-.675-1.54-1.012-2.099-.968s-1.017.458-1.933 1.285"></svg:path></svg:g>`,
})
export class HugeiconsDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
