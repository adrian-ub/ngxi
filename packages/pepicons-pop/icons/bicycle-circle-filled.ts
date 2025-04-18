import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBicycleCircleFilledIcon],svg[pepicons-pop-bicycle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopBicycleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M16.062 6.936a1 1 0 1 1-.124-1.996C19.828 4.7 22 5.46 22 7.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C19.87 7.862 20 7.77 20 7.44c0-.296-1.094-.68-3.938-.504"></svg:path><svg:path fill-rule="evenodd" d="M18.5 23a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-11 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:path d="M8 9.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M7.5 19.5H13a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 17 10.619h-5.55l-.802-2.432a1 1 0 0 0-1.9.627l1.007 3.047l-3.146 6.186A1 1 0 0 0 7.5 19.5m3.138-4.964L9.13 17.5h2.487zm2.536 1.303l2.019-3.22h-3.082z" clip-rule="evenodd"></svg:path><svg:path d="m16.98 5.743l2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopBicycleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopBicycleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
