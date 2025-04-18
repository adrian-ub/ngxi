import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiTouchIcon],svg[flat-ui-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:clippath id="flatUiTouch0"><svg:circle cx="50" cy="50" r="50"></svg:circle></svg:clippath><svg:g fill-rule="evenodd" clip-path="url(#flatUiTouch0)" clip-rule="evenodd"><svg:path fill="#34495E" d="M100 50c0 6.67-1.306 13.093-3.676 18.999L3.677 69A50.9 50.9 0 0 1 0 50C0 22.386 22.386 0 50 0c27.613 0 50 22.386 50 50"></svg:path><svg:path fill="#D7DBDE" d="M-1 70h102v31H-1z"></svg:path><svg:path fill="#fff" d="M100 71v29H0V71zm2-2H-2v33h104z"></svg:path><svg:path fill="#DF9274" d="M-22.758-33.75c8.363-8.362 21.921-8.362 30.284 0l66.203 66.203c8.362 8.363 8.362 21.921 0 30.284c-4.034 4.033-9.441 6.262-14.729 6.262c-5.673 0-11.227-1.934-15.556-6.262L-22.758-3.465c-8.363-8.363-8.363-21.922 0-30.285"></svg:path><svg:path fill="#fff" d="m61.215 19.844l12.5 12.5c6.195 6.195 7.804 15.227 4.856 22.91L61.275 37.958c-4.999-4.999-5.016-13.088-.06-18.114" opacity=".3"></svg:path><svg:path d="M46.456 14.131a1 1 0 1 1-1.414-1.415l4.502-4.5l1.414 1.414zm-7 2.001a.999.999 0 1 1-1.414-1.414l9.002-9.002l1.414 1.414z" opacity=".2"></svg:path></svg:g>`,
})
export class FlatUiTouchIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
