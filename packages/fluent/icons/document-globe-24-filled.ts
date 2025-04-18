import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentGlobe24FilledIcon],svg[fluent-document-globe-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V2H6a2 2 0 0 0-2 2v7.498A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-8.493 9c.04-1.415.248-2.669.553-3.585c.171-.513.364-.893.554-1.134c.195-.247.329-.281.386-.281s.191.034.386.281c.19.241.383.62.554 1.134c.305.916.513 2.17.553 3.585zm-.396-3.9a6 6 0 0 1 .368-.887A5.505 5.505 0 0 0 1.022 17h2.985c.04-1.5.26-2.866.604-3.9m3.778 0a6 6 0 0 0-.368-.887A5.5 5.5 0 0 1 11.978 17H8.993c-.04-1.5-.26-2.866-.604-3.9m.604 4.9h2.985a5.5 5.5 0 0 1-3.957 4.787a6 6 0 0 0 .368-.886c.345-1.035.564-2.4.604-3.901m-2.107 4.719c-.195.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.135c-.305-.915-.513-2.17-.553-3.584h2.986c-.04 1.415-.248 2.669-.553 3.584c-.171.514-.364.894-.554 1.135M1.022 18a5.505 5.505 0 0 0 3.957 4.787a6 6 0 0 1-.368-.886c-.345-1.035-.564-2.4-.604-3.901z"></svg:path>`,
})
export class FluentDocumentGlobe24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
