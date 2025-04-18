import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageFlipVerticalIcon],svg[hugeicons-image-flip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.012 12.058h3.91c5.15 0 7.29 0 7.75-1.55c.48-1.59-1.37-2.57-5.83-4.93l-.4.64l.35-.66l-3.92-2.08c-2.24-1.18-3.37-1.77-4.47-1.2c-1.16.6-1.16 1.88-1.16 4.22v2.08c0 1.41 0 2.27.69 2.89c.66.59 1.52.59 3.08.59m-1.715-8.49a.5.5 0 0 0-.205.04c-.35.18-.35 1.32-.35 2.89v2.08c0 .96 0 1.6.19 1.77c.23.21.96.21 2.07.21h3.92c2.96 0 6.02 0 6.31-.47c-.09-.53-2.52-1.82-5.1-3.18l-.05-.02l-3.92-2.08l-.168-.088c-1.252-.655-2.198-1.149-2.697-1.152m-.895 19.78c.29.15.58.22.89.22l.01-.01c.87 0 1.898-.538 3.528-1.392l.052-.028l3.92-2.08l-.35-.66l.4.64l.064-.034c4.414-2.335 6.244-3.303 5.766-4.896c-.46-1.55-2.59-1.55-7.75-1.55h-3.92c-1.56 0-2.42 0-3.08.59c-.69.63-.69 1.48-.69 2.89v2.08c0 2.34 0 3.63 1.16 4.23m.54-8.08c.23-.21.96-.21 2.07-.21h3.93c2.96 0 6.02 0 6.31.46c-.09.539-2.518 1.824-5.081 3.18l-.019.01l-.05.02l-3.92 2.08c-1.55.82-2.67 1.41-3.08 1.2c-.35-.18-.35-1.32-.35-2.89v-2.08c0-.96 0-1.59.19-1.77" color="currentColor"></svg:path>`,
})
export class HugeiconsImageFlipVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
