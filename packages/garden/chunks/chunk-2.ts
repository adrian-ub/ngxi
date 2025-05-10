import { Component, input } from '@angular/core'

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

@Component({
  standalone: true,
  selector: 'svg[gardenAlertErrorFill12Icon],svg[garden-alert-error-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 1C2.46 1 0 3.46 0 6.5S2.46 12 5.5 12S11 9.54 11 6.5S8.54 1 5.5 1M5 3.5c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5S5 6.78 5 6.5zm.5 6.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class GardenAlertErrorFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
