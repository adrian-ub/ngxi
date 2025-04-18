import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBackSquareFilledIcon],svg[lsicon-back-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.656 6.938A.4.4 0 0 1 8.5 7H6V5h2.5c.656 0 .887.171.963.271c.075.099.114.28.02.579c-.092.29-.286.6-.513.833a1.5 1.5 0 0 1-.314.255M8.5 8H6v3h2.5c.336 0 .72-.173 1.067-.492c.344-.318.6-.735.698-1.13c.097-.389.033-.699-.165-.915C9.89 8.234 9.431 8 8.5 8"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm3 2a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3c.664 0 1.28-.327 1.745-.758c.47-.432.839-1.015.99-1.62c.153-.611.092-1.301-.398-1.835q-.368-.401-.978-.6c.247-.299.46-.661.578-1.037c.142-.451.175-1.02-.178-1.484C9.908 4.204 9.29 4 8.5 4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBackSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
