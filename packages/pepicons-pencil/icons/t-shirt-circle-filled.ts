import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTShirtCircleFilledIcon],svg[pepicons-pencil-t-shirt-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTShirtCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m5.668 13.009l1.166-.583V19.5a2.5 2.5 0 0 0 2.5 2.5h7.335a2.5 2.5 0 0 0 2.5-2.5v-7.075l1.166.581a.5.5 0 0 0 .71-.338l.945-4.236a.5.5 0 0 0-.135-.463l-2.248-2.24A2.5 2.5 0 0 0 17.842 5h-2.007a.5.5 0 0 0-.493.415c-.287 1.658-1.04 2.409-2.342 2.409c-1.3 0-2.054-.751-2.34-2.409A.5.5 0 0 0 10.167 5H8.161a2.5 2.5 0 0 0-1.766.73L4.15 7.97a.5.5 0 0 0-.135.462l.943 4.238a.5.5 0 0 0 .711.338M8.161 6h1.598c.436 1.84 1.538 2.824 3.241 2.824S15.806 7.84 16.243 6h1.6a1.5 1.5 0 0 1 1.058.437l2.053 2.046l-.745 3.343l-1.317-.656a.5.5 0 0 0-.723.448V19.5a1.5 1.5 0 0 1-1.5 1.5H9.334a1.5 1.5 0 0 1-1.5-1.5v-7.882a.5.5 0 0 0-.724-.448l-1.316.658l-.744-3.345l2.051-2.045A1.5 1.5 0 0 1 8.161 6" clip-rule="evenodd"></svg:path><svg:path d="M15 13.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTShirtCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTShirtCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
