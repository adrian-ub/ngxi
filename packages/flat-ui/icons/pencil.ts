import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiPencilIcon],svg[flat-ui-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#F2F2F2"></svg:circle><svg:clippath id="flatUiPencil0"><svg:circle cx="50" cy="50" r="50"></svg:circle></svg:clippath><svg:g fill-rule="evenodd" clip-path="url(#flatUiPencil0)" clip-rule="evenodd"><svg:path fill="#3B97D3" d="M28.016 74.252v20.66C34.652 98.167 42.111 100 50 100s15.348-1.833 21.984-5.088v-20.66L50.001 32.013z"></svg:path><svg:path d="M40.001 98.998V82.9c-7.061-1.658-11.912-5.016-11.995-8.9l-.005.005v20.899a49.6 49.6 0 0 0 12 4.094" opacity=".15"></svg:path><svg:path fill="#fff" d="M60 98.998V82.9c7.061-1.658 11.912-5.016 11.995-8.9l.005.005v20.899a49.6 49.6 0 0 1-12 4.094" opacity=".15"></svg:path><svg:path fill="#F0C419" d="M71.982 73.894L56.495 44.396A13.9 13.9 0 0 1 50.001 46c-2.352 0-4.564-.586-6.51-1.611L28 73.894h.001c0 5.581 9.85 10.105 22 10.105s22-4.524 22-10.105z"></svg:path><svg:path fill="#D4896C" d="M50 76c-12.15 0-22-4.925-22-10.999V35c0-6.075 9.85-11 22-11s22 4.925 22 11v30.001C72 71.075 62.15 76 50 76"></svg:path><svg:ellipse cx="50" cy="35" fill="#DF9173" rx="22" ry="11"></svg:ellipse><svg:path fill="#F0C419" d="M50 86c-12.15 0-22-4.925-22-11V55c0 6.075 9.85 11 22 11s22-4.925 22-11v20c0 6.075-9.85 11-22 11"></svg:path></svg:g>`,
})
export class FlatUiPencilIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
