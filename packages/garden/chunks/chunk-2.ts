import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenZendeskFill16Icon],svg[garden-zendesk-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.667 0C15.403 0 16 .597 16 1.333v13.334c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 0 1 0 14.667V1.333C0 .597.597 0 1.333 0zM7.615 6.348L3 11.5h4.615zm3.077 3.02c-1.214 0-2.217.878-2.302 1.98l-.005.152H13c0-1.173-1.038-2.132-2.308-2.132M13 4.5H8.385v5.152zm-5.385 0H3c0 1.173 1.038 2.132 2.308 2.132c1.214 0 2.217-.878 2.302-1.98z"></svg:path>`,
})
export class GardenZendeskFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gardenZendeskStroke12Icon],svg[garden-zendesk-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.538 3.376V10H0zm0-2.376c0 1.508-1.246 2.741-2.769 2.741S0 2.508 0 1zm.924 9c0-1.508 1.246-2.741 2.769-2.741S12 8.492 12 10zm0-2.376V1H12z"></svg:path>`,
})
export class GardenZendeskStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gardenZendeskStroke16Icon],svg[garden-zendesk-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.385 5.168V14H0zm0-3.168c0 2.01-1.662 3.655-3.693 3.655C1.662 5.655 0 4.01 0 2zm1.23 12c0-2.01 1.662-3.655 3.693-3.655C14.338 10.345 16 11.99 16 14zm0-3.168V2H16z"></svg:path>`,
})
export class GardenZendeskStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
