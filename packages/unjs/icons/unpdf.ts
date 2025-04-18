import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsUnpdfIcon],svg[unjs-unpdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M21.963 1.547H4.2V30.41h23.655V7.2z"></svg:path><svg:path stroke="#B0BEC5" stroke-linecap="round" stroke-miterlimit="10" stroke-width=".966" d="M8.335 10.263h15.29M8.335 13.92h15.29m-15.29 3.655h15.29m-15.29 3.658h15.29M8.335 24.89h6.538"></svg:path><svg:path fill="#6FBFF0" d="M27.363 5.898L23.198 1.72A2.64 2.64 0 0 0 21.385 1H4.26a.703.703 0 0 0-.702.702v28.595c0 .388.315.703.702.703h23.483a.703.703 0 0 0 .702-.703V7.82c-.003-.727-.553-1.423-1.082-1.923M27.443 30H4.557V2h16.165c.53 0 .962.43.962.962v4.47h4.335c.785 0 1.422.433 1.422 1.423z"></svg:path></svg:g>`,
})
export class UnjsUnpdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
