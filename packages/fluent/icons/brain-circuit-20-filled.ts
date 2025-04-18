import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrainCircuit20FilledIcon],svg[fluent-brain-circuit-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.473 18a2.96 2.96 0 0 1-1.973-.749V13h2a1.5 1.5 0 0 0 1.5-1.5v-.585a1.5 1.5 0 1 0-1 0v.585a.5.5 0 0 1-.5.5h-2V2.462a2.423 2.423 0 0 1 3.8 1.486l.125.627l.406.081A2.7 2.7 0 0 1 17 7.302V7.5c0 .726-.31 1.38-.805 1.837a3.248 3.248 0 0 1-.77 6.088l-.037.185A2.97 2.97 0 0 1 12.473 18M8.077 2c.532 0 1.023.171 1.423.462V6h-.585a1.5 1.5 0 1 0 0 1H9.5v10.251a2.973 2.973 0 0 1-4.888-1.64l-.037-.186A3.248 3.248 0 0 1 2.903 10H6.5a.5.5 0 0 1 .5.5v.585a1.5 1.5 0 1 0 1 0V10.5A1.5 1.5 0 0 0 6.5 9h-3A2.5 2.5 0 0 1 3 7.5v-.198a2.7 2.7 0 0 1 2.169-2.646l.406-.08l.125-.628A2.42 2.42 0 0 1 8.077 2M7.5 6a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m6-3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentBrainCircuit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
