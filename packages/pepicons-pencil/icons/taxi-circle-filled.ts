import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTaxiCircleFilledIcon],svg[pepicons-pencil-taxi-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTaxiCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.171 6a2 2 0 0 0-1.94 1.515L6.1 12.04A2 2 0 0 0 4.5 14v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3a2 2 0 0 0-1.6-1.96l-1.13-4.525A2 2 0 0 0 16.828 6zM6.5 13a.5.5 0 0 0 .485-.379l1.216-4.864A1 1 0 0 1 9.171 7h7.658a1 1 0 0 1 .97.757l1.216 4.864A.5.5 0 0 0 19.5 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1"></svg:path><svg:path d="M18 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M8 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m.5 4.5a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0zm-2 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm14 0a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0zm-2 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM15.648 8h-5.296a1.5 1.5 0 0 0-1.457 1.143l-.49 2A1.5 1.5 0 0 0 9.862 13h6.276a1.5 1.5 0 0 0 1.457-1.857l-.49-2A1.5 1.5 0 0 0 15.647 8M9.866 9.381A.5.5 0 0 1 10.352 9h5.296a.5.5 0 0 1 .485.381l.49 2a.5.5 0 0 1-.485.619H9.862a.5.5 0 0 1-.486-.619zM14.5 5.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTaxiCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTaxiCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
