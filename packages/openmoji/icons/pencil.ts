import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPencilIcon],svg[openmoji-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="m14.594 53.154l3.66 3.66l-5.63 2.279z"></svg:path><svg:path fill="#f4aa41" d="m18.038 41.876l18.83-18.83l11.313 11.313l-18.67 18.67"></svg:path><svg:path fill="#a57939" d="m14.413 52.566l3.515-9.171l9.9 9.899l-9.172 3.515"></svg:path><svg:path fill="#EA5A47" d="m42.921 16.993l7.502-7.502l11.313 11.313l-7.439 7.438"></svg:path><svg:path fill="#9b9b9a" d="m35.65 24.264l7.682-7.682l11.313 11.313l-7.617 7.617"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m18.63 56.82l9.198-3.526l25.993-25.993l-9.9-9.9l-25.993 25.994l-3.538 9.208zm28.705-42.833l3.504-3.503l9.899 9.899l-3.474 3.474m-38.708 18.91l9.9 9.899"></svg:path><svg:path d="m14.398 52.582l-2.491 6.733l6.749-2.506M36.91 25.007l9.512 9.513"></svg:path></svg:g>`,
})
export class OpenmojiPencilIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
