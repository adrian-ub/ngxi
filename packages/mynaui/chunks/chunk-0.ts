import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAArrowDownIcon],svg[mynaui-a-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 13.667L7 7l-2.5 6.667m5 0L10.75 17M9.5 13.667h-5M3.25 17l1.25-3.333M17.25 7.5v9m3.5-3.5l-3.5 3.5l-3.5-3.5"></svg:path>`,
})
export class MynauiAArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAArrowUpIcon],svg[mynaui-a-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 13.667L7 7l-2.5 6.667m5 0L10.75 17M9.5 13.667h-5M3.25 17l1.25-3.333M17.25 7.5v9m3.5-6L17.25 7l-3.5 3.5"></svg:path>`,
})
export class MynauiAArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAArrowUpSolidIcon],svg[mynaui-a-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6.25a.75.75 0 0 1 .702.487l3.75 10a.75.75 0 0 1-1.404.526L8.98 14.417H5.02l-1.068 2.846a.75.75 0 1 1-1.404-.526l3.75-10A.75.75 0 0 1 7 6.25m1.418 6.667L7 9.136l-1.418 3.78zM16.72 6.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06H18v5.47a.75.75 0 0 1-1.5 0v-5.47h-3.28a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class MynauiAArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAArrowDownSolidIcon],svg[mynaui-a-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6.25a.75.75 0 0 1 .702.487l3.75 10a.75.75 0 0 1-1.404.526L8.98 14.417H5.02l-1.068 2.846a.75.75 0 1 1-1.404-.526l3.75-10A.75.75 0 0 1 7 6.25m1.418 6.667L7 9.136l-1.418 3.78zM17.25 6.75a.75.75 0 0 1 .75.75v4.97h3.28a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06h3.28V7.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAcademicHatIcon],svg[mynaui-academic-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L3.092 6.637c-1.456.682-1.456 3.044 0 3.726l6.69 3.137a5.17 5.17 0 0 0 4.435 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726zM22 8.5v5"></svg:path><svg:path d="M5 11.5v5.125C5 19.543 9.694 21 12 21s7-1.457 7-4.375V11.5"></svg:path></svg:g>`,
})
export class MynauiAcademicHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAcademicHatSolidIcon],svg[mynaui-academic-hat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.75 8.5v5a.75.75 0 0 1-1.5 0v-2.469l-.023.011l-1.477.693v4.89c0 1.909-1.527 3.193-3.05 3.953c-1.564.78-3.428 1.172-4.7 1.172s-3.136-.392-4.7-1.172c-1.523-.76-3.05-2.044-3.05-3.953v-4.89l-1.477-.692C1.721 10.549 1.25 9.478 1.25 8.5s.47-2.05 1.523-2.542L9.464 2.82a5.92 5.92 0 0 1 5.072 0l6.69 3.137C22.28 6.45 22.75 7.522 22.75 8.5m-8.214 5.68a5.92 5.92 0 0 1-5.072 0L5.75 12.437v4.187c0 1.01.82 1.913 2.22 2.61c1.36.679 2.996 1.015 4.03 1.015s2.67-.336 4.03-1.014c1.4-.698 2.22-1.601 2.22-2.61v-4.188z"></svg:path>`,
})
export class MynauiAcademicHatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAccessibilityIcon],svg[mynaui-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M8 9.5l4 .778m0 0l4-.778m-4 .778v2.333m0 0L10.4 16.5m1.6-3.889l1.6 3.889M12 7.25v.5"></svg:path>`,
})
export class MynauiAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiActivityIcon],svg[mynaui-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12h-2.962c-.21 0-.316 0-.405.042a.5.5 0 0 0-.201.173c-.061.088-.092.205-.155.44l-1.817 6.846c-.233.875-.349 1.313-.524 1.426a.435.435 0 0 1-.485-.002c-.175-.115-.288-.554-.514-1.43l-3.873-14.99c-.227-.876-.34-1.315-.515-1.43a.435.435 0 0 0-.485-.002c-.175.113-.291.55-.524 1.426l-1.817 6.845c-.063.236-.094.353-.154.44a.5.5 0 0 1-.202.174C6.278 12 6.173 12 5.962 12H3"></svg:path>`,
})
export class MynauiActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiActivitySolidIcon],svg[mynaui-activity-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.292 2.396c.124.124.206.254.258.35c.079.145.138.3.185.44c.09.268.182.625.287 1.032l3.68 14.24L16.31 12.4l.013-.05l.003-.011c.044-.17.117-.454.283-.693a1.5 1.5 0 0 1 .599-.509c.191-.09.369-.117.5-.127c.105-.01.22-.009.308-.009H21a1 1 0 1 1 0 2h-2.78l-1.804 6.795c-.108.406-.202.762-.294 1.03a3 3 0 0 1-.188.44a1.4 1.4 0 0 1-.454.501a1.44 1.44 0 0 1-1.58-.006a1.4 1.4 0 0 1-.45-.505a3 3 0 0 1-.185-.441c-.09-.268-.182-.625-.287-1.032l-3.68-14.24L7.69 11.6l-.013.05l-.003.011c-.044.17-.118.454-.283.693a1.5 1.5 0 0 1-.599.509c-.191.09-.369.117-.5.127c-.105.01-.22.009-.308.009H3a1 1 0 1 1 0-2h2.78l1.804-6.796c.108-.405.202-.762.294-1.028c.048-.14.108-.295.188-.44a1.4 1.4 0 0 1 .454-.502a1.435 1.435 0 0 1 1.772.162"></svg:path>`,
})
export class MynauiActivitySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiActivitySquareIcon],svg[mynaui-activity-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 12h-2l-2 5l-2-10l-2 5H7"></svg:path><svg:path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12"></svg:path></svg:g>`,
})
export class MynauiActivitySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiActivitySquareSolidIcon],svg[mynaui-activity-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.962 2.421c1.276-.171 2.908-.171 4.981-.171h.114c2.073 0 3.705 0 4.98.171c1.31.176 2.354.545 3.175 1.367c.822.821 1.19 1.866 1.367 3.174c.171 1.276.171 2.908.171 4.981v.114c0 2.073 0 3.705-.171 4.98c-.176 1.31-.545 2.354-1.367 3.175c-.821.822-1.866 1.19-3.174 1.367c-1.276.171-2.908.171-4.981.171h-.114c-2.073 0-3.705 0-4.98-.171c-1.31-.176-2.354-.545-3.175-1.367c-.822-.821-1.19-1.866-1.367-3.174c-.171-1.276-.171-2.908-.171-4.981v-.114c0-2.073 0-3.705.171-4.98c.176-1.31.545-2.354 1.367-3.175c.821-.822 1.866-1.19 3.174-1.367m4.773 4.432a.75.75 0 0 0-1.431-.132L8.492 11.25H7a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .696-.472l1.063-2.657l1.506 7.526a.75.75 0 0 0 1.431.132l1.812-4.529H17a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.696.471L13.24 14.38z"></svg:path>`,
})
export class MynauiActivitySquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAddQueueIcon],svg[mynaui-add-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9v10.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.598 21H15m-1-8v-3m0 0V7m0 3h-3m3 0h3M7 13.8V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C8.52 3 9.08 3 10.2 3h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.986.218-2.104.218h-7.607c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C7 15.48 7 14.92 7 13.8"></svg:path>`,
})
export class MynauiAddQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAddQueueSolidIcon],svg[mynaui-add-queue-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.17 2.25h7.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.203 1.201c.171.338.238.694.27 1.074c.03.364.03.81.03 1.344v7.661c0 .534 0 .98-.03 1.345c-.032.38-.099.736-.27 1.073a2.75 2.75 0 0 1-1.203 1.203c-.337.171-.693.238-1.072.27c-.364.029-.809.029-1.342.029h-7.667c-.534 0-.979 0-1.343-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.201-1.202c-.172-.337-.24-.693-.27-1.073c-.03-.364-.03-.81-.03-1.344V6.17c0-.534 0-.98.03-1.345c.03-.38.098-.736.27-1.074a2.75 2.75 0 0 1 1.2-1.201c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03M3 8.25a.75.75 0 0 1 .75.75v10.4c0 .292 0 .466.011.596a.6.6 0 0 0 .018.12a.25.25 0 0 0 .104.105a.6.6 0 0 0 .12.018c.13.01.304.011.595.011H15a.75.75 0 0 1 0 1.5H4.572c-.257 0-.493 0-.69-.016a1.8 1.8 0 0 1-.677-.175a1.75 1.75 0 0 1-.764-.765a1.8 1.8 0 0 1-.175-.676a9 9 0 0 1-.016-.692V9A.75.75 0 0 1 3 8.25m11-2a.75.75 0 0 0-.75.75v2.25H11a.75.75 0 0 0 0 1.5h2.25V13a.75.75 0 0 0 1.5 0v-2.25H17a.75.75 0 0 0 0-1.5h-2.25V7a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiAddQueueSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAeroplaneIcon],svg[mynaui-aeroplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.134 6.992l3.396-3.397a2.033 2.033 0 0 1 2.875 2.875l-3.397 3.396l1.838 9.145c.235 1.17-2.034 2.8-2.638 1.25l-2.69-6.904l-3.493 3.493c.17 2.041.207 2.72-1.224 4.15l-2.175-3.626L3 15.199c1.43-1.431 2.109-1.395 4.15-1.224l3.493-3.492l-6.904-2.691c-1.55-.604.08-2.874 1.25-2.638z"></svg:path>`,
})
export class MynauiAeroplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAeroplaneSolidIcon],svg[mynaui-aeroplane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.935 3.065a2.783 2.783 0 0 0-3.935 0l-3.112 3.112l-8.75-1.758c-.554-.111-1.076.083-1.462.333a3.1 3.1 0 0 0-.979 1.027c-.23.393-.406.905-.321 1.431c.093.586.484 1.044 1.091 1.28l5.834 2.274L6.866 13.2c-.83-.067-1.541-.103-2.199.059c-.797.196-1.442.655-2.197 1.41a.75.75 0 0 0 .144 1.174L6.08 17.92l2.08 3.465a.75.75 0 0 0 1.173.144c.755-.755 1.214-1.4 1.41-2.197c.162-.658.126-1.368.059-2.199l2.435-2.435l2.274 5.835c.236.607.695.998 1.28 1.09c.527.085 1.038-.09 1.432-.321a3.1 3.1 0 0 0 1.026-.979c.25-.386.444-.908.333-1.461l-1.758-8.75L20.935 7a2.78 2.78 0 0 0 0-3.935"></svg:path>`,
})
export class MynauiAeroplaneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAirConditionerIcon],svg[mynaui-air-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.346 4.5H5.654c-.629 0-1.154.525-1.154 1.154v5.77c0 .628.525 1.153 1.154 1.153h12.692c.629 0 1.154-.525 1.154-1.154v-5.77c0-.628-.525-1.153-1.154-1.153"></svg:path><svg:path d="M16.615 12.577v-2.308c0-.628-.525-1.154-1.153-1.154H8.537c-.628 0-1.153.526-1.153 1.154v2.308m-.577 5.77c1.64 0 1.73-1.604 1.73-2.886m8.654 2.885c-1.64 0-1.73-1.603-1.73-2.885M12 19.5v-4.039"></svg:path></svg:g>`,
})
export class MynauiAirConditionerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAirConditionerSolidIcon],svg[mynaui-air-conditioner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5.654c0-1.043.861-1.904 1.904-1.904h12.692c1.043 0 1.904.861 1.904 1.904v5.77a1.915 1.915 0 0 1-1.904 1.903H5.654a1.915 1.915 0 0 1-1.904-1.904zm12.115 6.173v-1.558a.416.416 0 0 0-.404-.404H8.539a.416.416 0 0 0-.403.404v1.558zM8.538 14.71a.75.75 0 0 1 .75.75c0 .625-.014 1.49-.305 2.205a2.27 2.27 0 0 1-.778 1.02c-.388.277-.86.41-1.397.41a.75.75 0 1 1 0-1.5c.283 0 .437-.067.527-.131c.094-.067.183-.177.258-.363c.165-.406.195-.984.195-1.64a.75.75 0 0 1 .75-.75m3.462 0a.75.75 0 0 1 .75.75V19.5a.75.75 0 0 1-1.5 0v-4.039a.75.75 0 0 1 .75-.75m3.461 0a.75.75 0 0 1 .75.75c0 .657.03 1.235.196 1.641c.075.186.164.296.258.363c.09.064.244.131.527.131a.75.75 0 0 1 0 1.5c-.537 0-1.01-.133-1.397-.41a2.27 2.27 0 0 1-.778-1.02c-.29-.715-.306-1.58-.306-2.205a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAirConditionerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAirplayIcon],svg[mynaui-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.632 16.511c-.216-.284-.324-.426-.455-.477a.48.48 0 0 0-.354 0c-.13.051-.239.193-.455.477l-2.363 3.106c-.336.443-.505.664-.505.85c0 .163.07.316.19.417c.139.116.408.116.947.116h4.726c.539 0 .808 0 .947-.116a.54.54 0 0 0 .19-.416c0-.187-.169-.408-.505-.85z"></svg:path><svg:path d="M17.4 18h.6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.6"></svg:path></svg:g>`,
})
export class MynauiAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAirplaySolidIcon],svg[mynaui-airplay-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.452 15.336a1.23 1.23 0 0 0-.904 0a1.3 1.3 0 0 0-.476.345c-.093.102-.191.232-.286.357L8.39 19.187c-.152.2-.296.39-.399.552c-.1.16-.24.413-.241.728c0 .376.162.742.458.991c.252.212.55.257.734.274c.189.018.422.018.665.018h4.787c.242 0 .475 0 .664-.018c.184-.017.482-.062.734-.274c.296-.248.458-.615.458-.991c0-.315-.141-.568-.241-.728c-.103-.163-.247-.351-.4-.552l-2.395-3.149c-.095-.125-.193-.255-.286-.357c-.1-.11-.253-.257-.476-.345"></svg:path><svg:path d="M6 2.25A3.75 3.75 0 0 0 2.25 6v9A3.75 3.75 0 0 0 6 18.75h.6a.75.75 0 0 0 0-1.5H6A2.25 2.25 0 0 1 3.75 15V6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v9A2.25 2.25 0 0 1 18 17.25h-.6a.75.75 0 0 0 0 1.5h.6A3.75 3.75 0 0 0 21.75 15V6A3.75 3.75 0 0 0 18 2.25z"></svg:path></svg:g>`,
})
export class MynauiAirplaySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAirpodsIcon],svg[mynaui-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18V8a3.5 3.5 0 1 0-3.5 3.5c.274-.006.5.214.5.488V18a1.5 1.5 0 0 0 3 0m4 0V8a3.5 3.5 0 1 1 3.5 3.5a.49.49 0 0 0-.5.488V18a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class MynauiAirpodsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAirpodsSolidIcon],svg[mynaui-airpods-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3.75a4.25 4.25 0 0 0-.25 8.493V18a2.25 2.25 0 0 0 4.5 0V8A4.25 4.25 0 0 0 6.5 3.75m11 0A4.25 4.25 0 0 0 13.25 8v10a2.25 2.25 0 0 0 4.5 0v-5.757a4.25 4.25 0 0 0-.25-8.493"></svg:path>`,
})
export class MynauiAirpodsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmIcon],svg[mynaui-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path d="M12 8.5v5l3 2"></svg:path></svg:g>`,
})
export class MynauiAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmCheckIcon],svg[mynaui-alarm-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path d="m10 13.323l1.379 1.575a.3.3 0 0 0 .466-.022l2.8-3.876"></svg:path></svg:g>`,
})
export class MynauiAlarmCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmCheckSolidIcon],svg[mynaui-alarm-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0m11.834-2.608a.75.75 0 0 1 .169 1.047l-2.8 3.876a1.05 1.05 0 0 1-1.639.077l-1.378-1.576a.75.75 0 1 1 1.128-.987l1.005 1.148l2.468-3.416a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiAlarmCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmMinusIcon],svg[mynaui-alarm-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0M9.5 13h5"></svg:path>`,
})
export class MynauiAlarmMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmMinusSolidIcon],svg[mynaui-alarm-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0m6.25-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiAlarmMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmPlusIcon],svg[mynaui-alarm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0M9.5 13h5M12 10.5v5"></svg:path>`,
})
export class MynauiAlarmPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmPlusSolidIcon],svg[mynaui-alarm-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0M12 9.75a.75.75 0 0 0-.75.75v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75V10.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiAlarmPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmSnoozeIcon],svg[mynaui-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path d="M10.75 11h2.5l-2.5 4h2.5"></svg:path></svg:g>`,
})
export class MynauiAlarmSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmSnoozeSolidIcon],svg[mynaui-alarm-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.584 3.612a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zm11.7-1.224a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zM3.25 13a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0m7.5-2.75a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiAlarmSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmSolidIcon],svg[mynaui-alarm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0m9.5-4.5a.75.75 0 0 0-1.5 0v5c0 .25.125.485.334.624l3 2a.75.75 0 1 0 .832-1.248l-2.666-1.777z"></svg:path>`,
})
export class MynauiAlarmSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmXIcon],svg[mynaui-alarm-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-10-2l4 4m0-4l-4 4"></svg:path>`,
})
export class MynauiAlarmXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmXSolidIcon],svg[mynaui-alarm-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0m6.22-2.53a.75.75 0 0 1 1.06 0L12 11.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 13l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 14.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 13l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiAlarmXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlbumIcon],svg[mynaui-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13 3.5V10l2-1.857L17 10V3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlbumSolidIcon],svg[mynaui-album-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 2.25V10a.75.75 0 0 0 1.26.55L15 9.166l1.49 1.384a.75.75 0 0 0 1.26-.55V2.357c.518.07.978.193 1.407.41a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057z"></svg:path>`,
})
export class MynauiAlbumSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignBottomIcon],svg[mynaui-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 14V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 4.602 4 5.068 4 6v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 17 6.068 17 7 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 15.398 10 14.932 10 14m10 0v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 7 17.932 7 17 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C14 8.602 14 9.068 14 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 17 16.068 17 17 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14m1 7H3"></svg:path>`,
})
export class MynauiAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignBottomSolidIcon],svg[mynaui-align-bottom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.975 2.25c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v8.05c0 .445 0 .816.02 1.12c.022.318.069.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-8.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm10 4c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v4.05c0 .445 0 .816.02 1.12c.022.318.069.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-4.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zM3 20.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiAlignBottomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignHorizontalIcon],svg[mynaui-align-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21v-1m0-17v1m0 10H8c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C5 15.602 5 16.068 5 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C6.602 20 7.068 20 8 20h4m0-6h4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C19 15.602 19 16.068 19 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C17.398 20 16.932 20 16 20h-4m0-6v-4m0 0h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 8.398 17 7.932 17 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 4 14.932 4 14 4h-2m0 6h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C7 8.398 7 7.932 7 7s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C8.602 4 9.068 4 10 4h2"></svg:path>`,
})
export class MynauiAlignHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignHorizontalSolidIcon],svg[mynaui-align-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v.25h1.275c.445 0 .816 0 1.12.02c.318.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021H12.75v2.5h3.275c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021H12.75V21a.75.75 0 0 1-1.5 0v-.25H7.975c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h3.275v-2.5H9.975c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h1.275V3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAlignHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignLeftIcon],svg[mynaui-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14h-8c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 15.602 7 16.068 7 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 20 9.068 20 10 20h8c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14M14 4h-4c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 5.602 7 6.068 7 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 10 9.068 10 10 10h4c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 8.398 17 7.932 17 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 4 14.932 4 14 4M3 21V3"></svg:path>`,
})
export class MynauiAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignLeftSolidIcon],svg[mynaui-align-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.052 13.46a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-8.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h8.05c.445 0 .816 0 1.12.02c.317.022.617.069.907.19m-4-10a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-4.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h4.05c.445 0 .816 0 1.12.02c.318.022.617.069.907.19M3 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25"></svg:path>`,
})
export class MynauiAlignLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignRightIcon],svg[mynaui-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20h8c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 18.398 17 17.932 17 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 14 14.932 14 14 14m0-10h-4c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 5.602 7 6.068 7 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 10 9.068 10 10 10h4c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 8.398 17 7.932 17 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 4 14.932 4 14 4m7 17V3"></svg:path>`,
})
export class MynauiAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignRightSolidIcon],svg[mynaui-align-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-4.948 1.21a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-4.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h4.05c.445 0 .816 0 1.12.02c.318.022.617.069.907.19M5.975 13.25h8.05c.445 0 .816 0 1.12.02c.318.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-8.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.069-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021"></svg:path>`,
})
export class MynauiAlignRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignTopIcon],svg[mynaui-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18v-8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 7 7.932 7 7 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 8.602 4 9.068 4 10v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 21 6.068 21 7 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.398 10 18.932 10 18m10-4v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 7 17.932 7 17 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C14 8.602 14 9.068 14 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 17 16.068 17 17 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14m1-11H3"></svg:path>`,
})
export class MynauiAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignTopSolidIcon],svg[mynaui-align-top-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 3m4.725 3.25c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v8.05c0 .445 0 .816.02 1.12c.022.317.069.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-8.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm10 0c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v4.05c0 .445 0 .816.02 1.12c.022.318.069.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-4.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021z"></svg:path>`,
})
export class MynauiAlignTopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignVerticalIcon],svg[mynaui-align-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h1m17 0h-1m-10 0V8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 5 7.932 5 7 5s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 6.602 4 7.068 4 8v4m6 0v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C8.398 19 7.932 19 7 19s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C4 17.398 4 16.932 4 16v-4m6 0h4m0 0v2c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 17 16.068 17 17 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14v-2m-6 0v-2c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 7 16.068 7 17 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C20 8.602 20 9.068 20 10v2"></svg:path>`,
})
export class MynauiAlignVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAlignVerticalSolidIcon],svg[mynaui-align-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.975 4.25h.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v3.275h2.5V9.975c0-.445 0-.816.02-1.12c.022-.317.069-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021h.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v1.275H21a.75.75 0 0 1 0 1.5h-.25v1.275c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12V12.75h-2.5v3.275c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12V12.75H3a.75.75 0 0 1 0-1.5h.25V7.975c0-.445 0-.816.02-1.12c.022-.317.069-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021"></svg:path>`,
})
export class MynauiAlignVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAltIcon],svg[mynaui-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.25h5.625l6.75 13.5H21m-6.75-13.5H21"></svg:path>`,
})
export class MynauiAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAltSolidIcon],svg[mynaui-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.25a1 1 0 0 0 0 2h5.007l6.474 12.947a1 1 0 0 0 .894.553H21a1 1 0 1 0 0-2h-5.007L9.519 4.803a1 1 0 0 0-.894-.553zm11.25 0a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmbulanceIcon],svg[mynaui-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.9 10h4m-2-2v4m.307 4.455C9.207 17.86 8.095 19 6.724 19s-2.483-1.14-2.483-2.546m4.966 0c0-1.405-1.112-2.545-2.483-2.545s-2.483 1.14-2.483 2.545m4.966 0h5.586m-10.552 0H3V6a1 1 0 0 1 1-1h9.793a1 1 0 0 1 1 1v2.182m5.586 8.272c0 1.406-1.111 2.546-2.482 2.546s-2.483-1.14-2.483-2.546m4.965 0c0-1.405-1.111-2.545-2.482-2.545s-2.483 1.14-2.483 2.545m4.965 0H21v-5.09l-2.515-2.579a2 2 0 0 0-1.431-.603h-2.26m.62 8.272h-.62m0 0V8.182"></svg:path>`,
})
export class MynauiAmbulanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmbulanceSolidIcon],svg[mynaui-ambulance-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.872 17.205h4.876c.332 1.448 1.603 2.545 3.149 2.545c1.545 0 2.817-1.098 3.148-2.547a.75.75 0 0 0 .705-.748v-5.091a.75.75 0 0 0-.213-.524l-2.515-2.578a2.75 2.75 0 0 0-1.968-.83h-1.51V6a1.75 1.75 0 0 0-1.75-1.75H4A1.75 1.75 0 0 0 2.25 6v10.455c0 .414.336.75.75.75h.576c.332 1.448 1.603 2.545 3.148 2.545s2.817-1.097 3.148-2.546m-4.88-.75c0-1.01.793-1.796 1.732-1.796c.94 0 1.733.786 1.733 1.795c0 1.01-.793 1.796-1.733 1.796s-1.733-.786-1.733-1.796m11.172 0c0-1.01.793-1.796 1.733-1.796c.939 0 1.732.786 1.732 1.795c0 1.01-.793 1.796-1.732 1.796c-.94 0-1.733-.786-1.733-1.796M9.649 8v1.25h1.25a.75.75 0 0 1 0 1.5H9.65V12a.75.75 0 0 1-1.5 0v-1.25H6.9a.75.75 0 0 1 0-1.5h1.25V8a.75.75 0 1 1 1.5 0"></svg:path>`,
})
export class MynauiAmbulanceSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandIcon],svg[mynaui-ampersand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 19.5C14.99 16.796 6.5 12 7.162 7.261c0-1.5 1.243-2.761 2.699-2.761s2.7 1.26 2.7 2.761c0 2.497-3.555 4.78-5.086 6.347c-1.3 1.33-1.3 3.551 0 4.881c1.297 1.327 3.488 1.314 4.773 0l5.252-5.552"></svg:path>`,
})
export class MynauiAmpersandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandSolidIcon],svg[mynaui-ampersand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.201 12.179c.31-.277.622-.566.921-.865c1.084-1.083 2.188-2.472 2.188-4.053c0-1.9-1.565-3.511-3.449-3.511c-1.867 0-3.42 1.58-3.45 3.458c-.18 1.412.318 2.764 1.102 3.989q.269.418.584.826a20 20 0 0 0-1.158 1.06c-1.585 1.622-1.585 4.309 0 5.93c1.593 1.63 4.268 1.613 5.845 0l1.345-1.421l.137.109c1.153.915 2.104 1.684 2.684 2.31a.75.75 0 0 0 1.1-1.021c-.675-.727-1.727-1.572-2.851-2.464l-.035-.028l2.88-3.045a.75.75 0 1 0-1.089-1.031l-2.97 3.139a52 52 0 0 1-2.34-1.974a24 24 0 0 1-1.444-1.408m-.34-6.929c1.028 0 1.95.91 1.95 2.011c0 .916-.673 1.917-1.75 2.992c-.266.267-.547.527-.831.782a10 10 0 0 1-.454-.647c-.69-1.077-1.003-2.083-.872-3.023a1 1 0 0 0 .007-.104c0-1.1.922-2.011 1.95-2.011m-.792 7.915c.493.53 1.025 1.042 1.57 1.535a52 52 0 0 0 2.313 1.954l-1.244 1.315c-.993 1.01-2.697 1.018-3.697-.004c-1.015-1.038-1.015-2.794 0-3.833c.282-.288.643-.607 1.058-.967"></svg:path>`,
})
export class MynauiAmpersandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandSquareIcon],svg[mynaui-ampersand-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M15.75 17c-1.712-1.803-7.5-5-7.049-8.16c0-1 .848-1.84 1.84-1.84s1.841.84 1.841 1.84c0 1.665-2.423 3.188-3.467 4.232a2.324 2.324 0 0 0 0 3.254c.884.885 2.378.876 3.254 0l3.581-3.701"></svg:path></svg:g>`,
})
export class MynauiAmpersandSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandSquareSolidIcon],svg[mynaui-ampersand-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.451 8.84c0-.584.51-1.09 1.09-1.09s1.091.506 1.091 1.09c0 .494-.381 1.095-1.116 1.812q-.18.175-.37.346a6 6 0 0 1-.147-.214c-.453-.692-.632-1.298-.556-1.837a1 1 0 0 0 .008-.106m-.006 4.761q.223-.221.541-.49c.298.303.613.597.932.879c.446.394.911.776 1.367 1.137l-.65.672c-.586.58-1.601.584-2.19-.004a1.574 1.574 0 0 1 0-2.194"></svg:path><svg:path d="M14.633 2.25c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057zm-3.069 9.475c.738-.72 1.568-1.713 1.568-2.884c0-1.417-1.185-2.591-2.59-2.591c-1.387 0-2.56 1.144-2.59 2.536c-.13 1.022.243 1.981.792 2.82q.123.187.26.372c-.224.192-.44.383-.62.563c-1.179 1.18-1.179 3.136 0 4.316c1.18 1.178 3.148 1.166 4.315 0l.775-.8c.758.588 1.363 1.07 1.732 1.46a.75.75 0 1 0 1.088-1.033c-.434-.457-1.083-.976-1.771-1.512l1.766-1.826a.75.75 0 1 0-1.078-1.043l-1.878 1.942c-.48-.379-.962-.771-1.422-1.178q-.415-.367-.783-.735q.221-.197.436-.407M9.451 8.841c0-.585.51-1.091 1.09-1.091s1.091.506 1.091 1.09c0 .494-.381 1.095-1.116 1.812q-.18.175-.37.346a6 6 0 0 1-.147-.214c-.453-.692-.632-1.298-.556-1.837a1 1 0 0 0 .008-.106m-.006 4.761q.223-.221.541-.49c.298.303.613.597.932.879c.446.394.911.776 1.367 1.137l-.65.672c-.586.58-1.601.584-2.19-.004a1.574 1.574 0 0 1 0-2.194"></svg:path></svg:g>`,
})
export class MynauiAmpersandSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandsIcon],svg[mynaui-ampersands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17.5C9.174 15.517 3 12 3.481 8.525c0-1.1.904-2.025 1.963-2.025s1.964.924 1.964 2.025c0 1.83-2.585 3.505-3.699 4.654c-.945.975-.945 2.605 0 3.58c.944.973 2.537.963 3.471 0L11 12.687M21 17.5c-1.826-1.983-8-5.5-7.519-8.975c0-1.1.904-2.025 1.963-2.025s1.964.924 1.964 2.025c0 1.83-2.585 3.505-3.699 4.654c-.945.975-.945 2.605 0 3.58c.944.973 2.537.963 3.471 0L21 12.687"></svg:path>`,
})
export class MynauiAmpersandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandsSolidIcon],svg[mynaui-ampersands-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.98 12.142q.422.44.9.876c.5.455 1.025.895 1.545 1.318l2.028-2.162a.75.75 0 1 1 1.094 1.027l-1.949 2.077c.761.61 1.48 1.2 1.954 1.714a.75.75 0 0 1-1.104 1.016c-.401-.436-1.06-.976-1.88-1.633l-.85.906c-1.226 1.265-3.307 1.278-4.547 0c-1.228-1.266-1.228-3.358 0-4.624c.206-.213.456-.44.716-.668a9 9 0 0 1-.324-.472c-.582-.917-.967-1.952-.831-3.045C2.76 7 3.969 5.75 5.444 5.75c1.493 0 2.714 1.28 2.714 2.775c0 1.245-.86 2.315-1.65 3.111q-.26.261-.528.506M5.444 7.25c-.625 0-1.213.568-1.213 1.275a1 1 0 0 1-.007.103c-.087.626.117 1.316.605 2.084q.089.14.187.279q.22-.203.428-.412c.78-.786 1.214-1.469 1.214-2.054c0-.707-.589-1.275-1.214-1.275m-.59 5.885a11 11 0 0 0-.606.566c-.664.684-.664 1.851 0 2.536a1.69 1.69 0 0 0 2.39.004l.758-.809a37 37 0 0 1-1.526-1.306a20 20 0 0 1-1.016-.99m11.126-.994q.422.44.9.876c.5.455 1.025.895 1.545 1.318l2.028-2.162a.75.75 0 1 1 1.094 1.027l-1.949 2.077c.762.61 1.48 1.2 1.954 1.714a.75.75 0 0 1-1.104 1.016c-.401-.436-1.06-.976-1.88-1.633l-.85.906c-1.226 1.265-3.307 1.278-4.547 0c-1.228-1.266-1.228-3.358 0-4.624c.206-.213.456-.44.716-.668a9 9 0 0 1-.324-.472c-.582-.917-.967-1.952-.831-3.045C12.76 7 13.969 5.75 15.444 5.75c1.493 0 2.714 1.28 2.714 2.775c0 1.245-.86 2.315-1.65 3.111q-.26.261-.528.506m-.536-4.892c-.625 0-1.213.568-1.213 1.275a1 1 0 0 1-.007.103c-.087.626.117 1.316.605 2.084q.089.14.187.279q.22-.203.428-.412c.78-.786 1.214-1.469 1.214-2.054c0-.707-.588-1.275-1.214-1.275m-.59 5.885q-.357.313-.606.566c-.664.684-.664 1.851 0 2.536a1.69 1.69 0 0 0 2.39.004l.758-.809a37 37 0 0 1-1.526-1.306a20 20 0 0 1-1.016-.99"></svg:path>`,
})
export class MynauiAmpersandsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnchorIcon],svg[mynaui-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12H3a9 9 0 1 0 18 0h-2m-7-5v14m0-14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class MynauiAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnchorSolidIcon],svg[mynaui-anchor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a2.75 2.75 0 0 0-.75 5.396v12.57a8.25 8.25 0 0 1-7.466-7.466H5a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0-.75.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5h1.216a8.25 8.25 0 0 1-7.466 7.466V7.646A2.751 2.751 0 0 0 12 2.25"></svg:path>`,
})
export class MynauiAnchorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAngryCircleIcon],svg[mynaui-angry-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1M8 8l3 1.5m2 0L16 8m-6.5 2.5V10m5 .5V10"></svg:path></svg:g>`,
})
export class MynauiAngryCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAngryCircleSolidIcon],svg[mynaui-angry-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m5.08-4.335a.75.75 0 0 1 1.005-.336l3 1.5a.75.75 0 1 1-.67 1.342l-.416-.208v.537a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .33-.621L7.666 8.67a.75.75 0 0 1-.336-1.006m9.005 1.006l-1.415.708c.199.134.33.362.33.621v.5a.75.75 0 0 1-1.5 0v-.537l-.415.208a.75.75 0 1 1-.67-1.342l3-1.5a.75.75 0 1 1 .67 1.342m-7.782 6.727A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204"></svg:path>`,
})
export class MynauiAngryCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAngryGhostIcon],svg[mynaui-angry-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 18.562v-6.518C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path><svg:path d="M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1M8 8l3 1.5m2 0L16 8m-6.5 2.5V10m5 .5V10"></svg:path></svg:g>`,
})
export class MynauiAngryGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAngryGhostSolidIcon],svg[mynaui-angry-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6.303 3.354A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204m-.218-8.069l3 1.5a.75.75 0 1 1-.67 1.342l-.416-.208v.537a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .33-.621L7.666 8.67a.75.75 0 0 1 .67-1.342m8.336.336a.75.75 0 0 1-.336 1.006l-1.415.708c.199.134.33.362.33.621v.5a.75.75 0 0 1-1.5 0v-.537l-.415.208a.75.75 0 1 1-.67-1.342l3-1.5a.75.75 0 0 1 1.006.336"></svg:path>`,
})
export class MynauiAngryGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAngrySquareIcon],svg[mynaui-angry-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1M8 8l3 1.5m2 0L16 8m-6.5 2.5V10m5 .5V10"></svg:path></svg:g>`,
})
export class MynauiAngrySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAngrySquareSolidIcon],svg[mynaui-angry-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.814 13.148A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 1 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204m-.218-8.069l3 1.5a.75.75 0 1 1-.67 1.342l-.416-.208v.537a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .33-.621L7.666 8.67a.75.75 0 0 1 .67-1.342m8.336.336a.75.75 0 0 1-.336 1.006l-1.415.708c.199.134.33.362.33.621v.5a.75.75 0 0 1-1.5 0v-.537l-.415.208a.75.75 0 1 1-.67-1.342l3-1.5a.75.75 0 0 1 1.006.336"></svg:path>`,
})
export class MynauiAngrySquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnnoyedCircleIcon],svg[mynaui-annoyed-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M9 15.5h6m-5-5.25H9m6 0h-1"></svg:path>`,
})
export class MynauiAnnoyedCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnnoyedCircleSolidIcon],svg[mynaui-annoyed-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m6 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m.75-6h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5m4.25.75A.75.75 0 0 1 14 9.5h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiAnnoyedCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnnoyedGhostIcon],svg[mynaui-annoyed-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18.562v-6.518C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2M9 15.5h6m-5-5.25H9m6 0h-1"></svg:path>`,
})
export class MynauiAnnoyedGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnnoyedGhostSolidIcon],svg[mynaui-annoyed-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6 3.456a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m.75-6h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5m4.25.75A.75.75 0 0 1 14 9.5h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiAnnoyedGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnnoyedSquareIcon],svg[mynaui-annoyed-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm6 6.1h6m-5-5.25H9m6 0h-1"></svg:path>`,
})
export class MynauiAnnoyedSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAnnoyedSquareSolidIcon],svg[mynaui-annoyed-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM8.25 15.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m.75-6h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5m4.25.75A.75.75 0 0 1 14 9.5h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiAnnoyedSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiApertureIcon],svg[mynaui-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.079 8.4l5.166 8.946M9.921 8.4h10.332M7.842 12l5.166-8.946M9.921 15.6L4.755 6.654M14.08 15.6H3.746M16.158 12l-5.166 8.946M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiApertureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiApertureSolidIcon],svg[mynaui-aperture-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.726 8.104A8.2 8.2 0 0 0 3.75 12c0 1.002.179 1.962.506 2.85h4.366l-1.42-2.457l-.019-.034zM4.111 6.27a1 1 0 0 1 .088-.12a9.74 9.74 0 0 1 8.837-3.846a9.76 9.76 0 0 1 7.924 5.844A9.7 9.7 0 0 1 21.75 12c0 2.141-.69 4.122-1.86 5.73a1 1 0 0 1-.09.12a9.74 9.74 0 0 1-8.836 3.846a9.76 9.76 0 0 1-7.924-5.844A9.7 9.7 0 0 1 2.25 12c0-2.142.69-4.122 1.86-5.73m1.549.451l2.182 3.78l1.425-2.468l.008-.015l2.463-4.264A8.23 8.23 0 0 0 5.66 6.721m7.743-2.852L11.22 7.65h7.792a8.26 8.26 0 0 0-5.609-3.781m6.341 5.281h-4.366l1.42 2.457l.019.034l2.457 4.255A8.2 8.2 0 0 0 20.25 12a8.2 8.2 0 0 0-.506-2.85m-1.404 8.129l-2.182-3.78l-3.896 6.747a8.23 8.23 0 0 0 6.078-2.967m-7.743 2.852l2.183-3.781H4.988a8.26 8.26 0 0 0 5.609 3.781"></svg:path>`,
})
export class MynauiApertureSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiApiIcon],svg[mynaui-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 13L7 11.5l5.5 5.5l-1.5 1.5c-.75.75-3.5 2-5.5 0s-.75-4.75 0-5.5M3 21l2.5-2.5m13-7.5L17 12.5L11.5 7L13 5.5c.75-.75 3.5-2 5.5 0s.75 4.75 0 5.5m-6-3l-2 2M21 3l-2.5 2.5m-2.5 6l-2 2"></svg:path>`,
})
export class MynauiApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiApiSolidIcon],svg[mynaui-api-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.53 21.53a.75.75 0 0 1-1.06-1.06l2.01-2.011c-.774-1.073-.908-2.265-.753-3.29c.178-1.172.743-2.2 1.243-2.7l1.5-1.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.061l-1.5 1.5c-.5.5-1.527 1.065-2.699 1.243c-1.025.155-2.217.02-3.29-.754zm7.5-11a.75.75 0 1 1-1.06-1.06L11.44 8l-.47-.47a.75.75 0 0 1 0-1.06l1.5-1.5c.5-.5 1.527-1.065 2.699-1.243c1.025-.155 2.217-.02 3.29.754l2.01-2.011a.75.75 0 1 1 1.061 1.06l-2.01 2.012c.774 1.072.91 2.264.754 3.29c-.178 1.171-.743 2.198-1.243 2.698l-1.5 1.5a.75.75 0 0 1-1.06 0l-.47-.47l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-2.44-2.44z"></svg:path>`,
})
export class MynauiApiSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArIcon],svg[mynaui-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 10l4 2m-4-2v4l4 2m-4-6l4-2l4 2m-4 2l4-2m-4 2v4m4-6v4l-4 2m-2.6 5c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6m18 0c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21m0-18c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4"></svg:path>`,
})
export class MynauiArIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArSolidIcon],svg[mynaui-ar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25H9.4a.75.75 0 0 1 0 1.5c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566a.75.75 0 0 1-1.5 0v-.033c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m7.8 1.552c-.63-.051-1.435-.052-2.567-.052a.75.75 0 0 1 0-1.5h.033c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655V9.4a.75.75 0 0 1-1.5 0c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302m-5.502 3.527a.75.75 0 0 1 .67 0l4 2a.75.75 0 0 1 .415.671v4a.75.75 0 0 1-.415.67l-4 2a.75.75 0 0 1-.67 0l-4-2A.75.75 0 0 1 7.25 14v-4a.75.75 0 0 1 .415-.67zM3 13.85a.75.75 0 0 1 .75.75c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052a.75.75 0 0 1 0 1.5h-.033c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V14.6a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v.033c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H14.6a.75.75 0 0 1 0-1.5c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiArSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArchiveIcon],svg[mynaui-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 11.5h3M20 8v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8m17 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3z"></svg:path>`,
})
export class MynauiArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArchiveSolidIcon],svg[mynaui-archive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.25h14A2.75 2.75 0 0 1 21.75 5v3a.75.75 0 0 1-.75.75h-.25V19A2.75 2.75 0 0 1 18 21.75H6A2.75 2.75 0 0 1 3.25 19V8.75H3A.75.75 0 0 1 2.25 8V5A2.75 2.75 0 0 1 5 2.25m-1.25 5h16.5V5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25zm6.75 3.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiArchiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalOneIcon],svg[mynaui-arrow-diagonal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.929 12.707l7.778-7.778m0 0v4.95m0-4.95h-4.95m11.314 6.364l-7.778 7.778m0 0h4.95m-4.95 0v-4.95"></svg:path>`,
})
export class MynauiArrowDiagonalOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalOneSolidIcon],svg[mynaui-arrow-diagonal-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.399 13.237a.75.75 0 0 0 1.06 0l4.929-4.928l2.32 2.32a.75.75 0 0 0 .75-.75v-4.95a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75l2.319 2.32l-4.928 4.928a.75.75 0 0 0 0 1.06m15.202-2.474a.75.75 0 0 1 0 1.06l-4.928 4.929l2.32 2.32a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1-.75-.75v-4.95a.75.75 0 0 1 .75-.75l2.32 2.319l4.928-4.928a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiArrowDiagonalOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalTwoIcon],svg[mynaui-arrow-diagonal-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.293 4.929l7.778 7.778m0 0h-4.95m4.95 0v-4.95m-6.364 11.314L4.93 11.293m0 0v4.95m0-4.95h4.95"></svg:path>`,
})
export class MynauiArrowDiagonalTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalTwoSolidIcon],svg[mynaui-arrow-diagonal-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.238 19.601a.75.75 0 0 0 0-1.06l-4.929-4.929l2.32-2.32a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75v4.95c0 .415.336.75.75.75l2.32-2.319l4.928 4.928a.75.75 0 0 0 1.06 0M10.763 4.399a.75.75 0 0 1 1.06 0l4.929 4.928l2.32-2.32a.75.75 0 0 1 .75.75v4.95a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1-.75-.75l2.32-2.32l-4.93-4.928a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiArrowDiagonalTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownIcon],svg[mynaui-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m0 0l-6-5.625m6 5.625l6-5.625"></svg:path>`,
})
export class MynauiArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownCircleIcon],svg[mynaui-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 7.5v9m3.5-3.5L12 16.5L8.5 13"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownCircleSolidIcon],svg[mynaui-arrow-down-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12M12 6.75a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V7.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiArrowDownCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftIcon],svg[mynaui-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.5 6.5l-11 11m0 0h9m-9 0v-9"></svg:path>`,
})
export class MynauiArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftCircleIcon],svg[mynaui-arrow-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.182 8.818l-6.364 6.364m4.95 0h-4.95v-4.95"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowDownLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftCircleSolidIcon],svg[mynaui-arrow-down-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.462-3.712a.75.75 0 0 0-1.06 0L9.568 13.37v-3.139a.75.75 0 0 0-1.5 0v4.95a.75.75 0 0 0 .75.75h4.95a.75.75 0 0 0 0-1.5h-3.14l5.084-5.084a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiArrowDownLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftSolidIcon],svg[mynaui-arrow-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 18.25a.75.75 0 0 0 .75-.75l-4.345-4.345L18.03 7.03a.75.75 0 0 0-1.06-1.06l-6.125 6.125L6.5 7.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75z"></svg:path>`,
})
export class MynauiArrowDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftSquareIcon],svg[mynaui-arrow-down-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.182 8.818l-6.364 6.364m4.95 0h-4.95v-4.95"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowDownLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftSquareSolidIcon],svg[mynaui-arrow-down-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m6.345 6.038a.75.75 0 0 0-1.06 0L9.568 13.37v-3.139a.75.75 0 0 0-1.5 0v4.95a.75.75 0 0 0 .75.75h4.95a.75.75 0 0 0 0-1.5h-3.14l5.084-5.084a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiArrowDownLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftWavesIcon],svg[mynaui-arrow-down-left-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.182 8.818l-6.364 6.364m4.95 0h-4.95v-4.95"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowDownLeftWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownLeftWavesSolidIcon],svg[mynaui-arrow-down-left-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0m5.147 6.213a.75.75 0 0 1 0 1.06l-5.083 5.084h3.139a.75.75 0 1 1 0 1.5h-4.95a.75.75 0 0 1-.75-.75v-4.95a.75.75 0 0 1 1.5 0v3.14l5.084-5.084a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiArrowDownLeftWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightIcon],svg[mynaui-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 6.5l11 11m0 0h-9m9 0v-9"></svg:path>`,
})
export class MynauiArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightCircleIcon],svg[mynaui-arrow-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.818 8.818l6.364 6.364m0-4.95v4.95h-4.95"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowDownRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightCircleSolidIcon],svg[mynaui-arrow-down-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.038-3.712a.75.75 0 0 0 0 1.06l5.083 5.084h-3.139a.75.75 0 0 0 0 1.5h4.95a.75.75 0 0 0 .75-.75v-4.95a.75.75 0 0 0-1.5 0v3.14L9.348 8.287a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiArrowDownRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightSolidIcon],svg[mynaui-arrow-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 18.25a.75.75 0 0 1-.75-.75l4.345-4.345L5.97 7.03a.75.75 0 0 1 1.06-1.06l6.125 6.125L17.5 7.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class MynauiArrowDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightSquareIcon],svg[mynaui-arrow-down-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.818 8.818l6.364 6.364m0-4.95v4.95h-4.95"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowDownRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightSquareSolidIcon],svg[mynaui-arrow-down-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-1.08 6.038a.75.75 0 0 0 0 1.06l5.084 5.084h-3.139a.75.75 0 0 0 0 1.5h4.95a.75.75 0 0 0 .75-.75v-4.95a.75.75 0 0 0-1.5 0v3.14L9.348 8.287a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiArrowDownRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightWavesIcon],svg[mynaui-arrow-down-right-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.818 8.818l6.364 6.364m0-4.95v4.95h-4.95"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowDownRightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownRightWavesSolidIcon],svg[mynaui-arrow-down-right-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.288 8.288a.75.75 0 0 1 1.06 0l5.084 5.083v-3.139a.75.75 0 0 1 1.5 0v4.95a.75.75 0 0 1-.75.75h-4.95a.75.75 0 0 1 0-1.5h3.14L8.287 9.348a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiArrowDownRightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownSolidIcon],svg[mynaui-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.487 14.422a.75.75 0 0 1-.034-1.06h5.797V4.5a.75.75 0 0 1 1.5 0v8.862h5.797a.75.75 0 0 1-.034 1.06l-6 5.625a.75.75 0 0 1-1.026 0z"></svg:path>`,
})
export class MynauiArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownSquareIcon],svg[mynaui-arrow-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 7.5v9m3.5-3.5L12 16.5L8.5 13"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownSquareSolidIcon],svg[mynaui-arrow-down-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M12 6.75a.75.75 0 0 0-.75.75v7.19l-2.22-2.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiArrowDownSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownWavesIcon],svg[mynaui-arrow-down-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 7.5v9m3.5-3.5L12 16.5L8.5 13"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowDownWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDownWavesSolidIcon],svg[mynaui-arrow-down-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M12 6.75a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V7.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiArrowDownWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftIcon],svg[mynaui-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"></svg:path>`,
})
export class MynauiArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftCircleIcon],svg[mynaui-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 12h-9m3.5 3.5L7.5 12L11 8.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftCircleSolidIcon],svg[mynaui-arrow-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m9.28-4.03a.75.75 0 0 1 0 1.06l-2.22 2.22h7.19a.75.75 0 0 1 0 1.5H9.31l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiArrowLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftRightIcon],svg[mynaui-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 7.5h11m0 0L14 11m3.5-3.5L14 4m3.5 12.5h-11m0 0L10 20m-3.5-3.5L10 13"></svg:path>`,
})
export class MynauiArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftRightSolidIcon],svg[mynaui-arrow-left-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 7.5c0 .414.336.75.75.75h6.97v3.28a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0v3.28H6.5a.75.75 0 0 0-.75.75m12.5 9a.75.75 0 0 1-.75.75h-6.97v3.28a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0v3.28h6.97a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class MynauiArrowLeftRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftSolidIcon],svg[mynaui-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.578 5.487a.75.75 0 0 1 1.06-.034v5.797H19.5a.75.75 0 0 1 0 1.5h-8.862v5.797a.75.75 0 0 1-1.06-.034l-5.625-6a.75.75 0 0 1 0-1.026z"></svg:path>`,
})
export class MynauiArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftSquareIcon],svg[mynaui-arrow-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 12h-9m3.5 3.5L7.5 12L11 8.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftSquareSolidIcon],svg[mynaui-arrow-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.163 5.72a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06l-2.22-2.22h7.19a.75.75 0 0 0 0-1.5H9.31l2.22-2.22a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiArrowLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftWavesIcon],svg[mynaui-arrow-left-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 12h-9m3.5 3.5L7.5 12L11 8.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowLeftWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLeftWavesSolidIcon],svg[mynaui-arrow-left-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m.965 5.895a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06l-2.22-2.22h7.19a.75.75 0 0 0 0-1.5H9.31l2.22-2.22a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiArrowLeftWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownIcon],svg[mynaui-arrow-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 18l4 4m0 0l4-4m-4 4V2"></svg:path>`,
})
export class MynauiArrowLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownLeftIcon],svg[mynaui-arrow-long-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 19H5m0 0v-6m0 6L19 5"></svg:path>`,
})
export class MynauiArrowLongDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownLeftSolidIcon],svg[mynaui-arrow-long-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.53 4.47a.75.75 0 0 1 0 1.06L8.905 16.155L11.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75l2.845 2.845L18.47 4.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiArrowLongDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownRightIcon],svg[mynaui-arrow-long-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 13v6m0 0h-6m6 0L5 5"></svg:path>`,
})
export class MynauiArrowLongDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownRightSolidIcon],svg[mynaui-arrow-long-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47 4.47a.75.75 0 0 0 0 1.06l10.625 10.625L12.25 19c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75l-2.845 2.845L5.53 4.47a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiArrowLongDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongDownSolidIcon],svg[mynaui-arrow-long-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 17.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06h3.78V2a.75.75 0 0 1 1.5 0v15.47z"></svg:path>`,
})
export class MynauiArrowLongDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongLeftIcon],svg[mynaui-arrow-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8l-4 4m0 0l4 4m-4-4h20"></svg:path>`,
})
export class MynauiArrowLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongLeftSolidIcon],svg[mynaui-arrow-long-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.53 7.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0v-3.78H22a.75.75 0 0 0 0-1.5H6.53z"></svg:path>`,
})
export class MynauiArrowLongLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongRightIcon],svg[mynaui-arrow-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 8l4 4m0 0l-4 4m4-4H2"></svg:path>`,
})
export class MynauiArrowLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongRightSolidIcon],svg[mynaui-arrow-long-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0v-3.78H2a.75.75 0 0 1 0-1.5h15.47z"></svg:path>`,
})
export class MynauiArrowLongRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpIcon],svg[mynaui-arrow-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 6l4-4m0 0l4 4m-4-4v20"></svg:path>`,
})
export class MynauiArrowLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpLeftIcon],svg[mynaui-arrow-long-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 11V5m0 0h6M5 5l14 14"></svg:path>`,
})
export class MynauiArrowLongUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpLeftSolidIcon],svg[mynaui-arrow-long-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.53 19.53a.75.75 0 0 0 0-1.06L8.905 7.845L11.75 5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75l2.845-2.845L18.47 19.53a.75.75 0 0 0 1.06 0"></svg:path>`,
})
export class MynauiArrowLongUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpRightIcon],svg[mynaui-arrow-long-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5h6m0 0v6m0-6L5 19"></svg:path>`,
})
export class MynauiArrowLongUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpRightSolidIcon],svg[mynaui-arrow-long-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47 19.53a.75.75 0 0 1 0-1.06L15.095 7.845L12.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75l-2.845-2.845L5.53 19.53a.75.75 0 0 1-1.06 0"></svg:path>`,
})
export class MynauiArrowLongUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowLongUpSolidIcon],svg[mynaui-arrow-long-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 6.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h3.78V22a.75.75 0 0 0 1.5 0V6.53z"></svg:path>`,
})
export class MynauiArrowLongUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightIcon],svg[mynaui-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"></svg:path>`,
})
export class MynauiArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightCircleIcon],svg[mynaui-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.5 12h9M13 8.5l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightCircleSolidIcon],svg[mynaui-arrow-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m10.22-4.03a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h7.19l-2.22-2.22a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiArrowRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightSolidIcon],svg[mynaui-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.422 5.487a.75.75 0 0 0-1.06-.034v5.797H4.5a.75.75 0 0 0 0 1.5h8.862v5.797a.75.75 0 0 0 1.06-.034l5.625-6a.75.75 0 0 0 0-1.026z"></svg:path>`,
})
export class MynauiArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightSquareIcon],svg[mynaui-arrow-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.5 12h9M13 8.5l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightSquareSolidIcon],svg[mynaui-arrow-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.103 5.72a.75.75 0 0 0 0 1.06l2.22 2.22H7.5a.75.75 0 0 0 0 1.5h7.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiArrowRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightWavesIcon],svg[mynaui-arrow-right-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.5 12h9M13 8.5l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowRightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowRightWavesSolidIcon],svg[mynaui-arrow-right-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12.47 7.97a.75.75 0 0 0 0 1.06l2.22 2.22H7.5a.75.75 0 0 0 0 1.5h7.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiArrowRightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpIcon],svg[mynaui-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.5v-15m0 0l-6 5.625M12 4.5l6 5.625"></svg:path>`,
})
export class MynauiArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpCircleIcon],svg[mynaui-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 16.5v-9M8.5 11L12 7.5l3.5 3.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpCircleSolidIcon],svg[mynaui-arrow-up-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m5.72-1.53l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.19a.75.75 0 0 1-1.5 0V9.31l-2.22 2.22a.75.75 0 0 1-1.06-1.06"></svg:path>`,
})
export class MynauiArrowUpCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpDownIcon],svg[mynaui-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 17.5v-11m0 0L11 10M7.5 6.5L4 10m12.5-3.5v11m0 0L20 14m-3.5 3.5L13 14"></svg:path>`,
})
export class MynauiArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpDownSolidIcon],svg[mynaui-arrow-up-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18.25a.75.75 0 0 0 .75-.75v-6.97h3.28a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 0 1.06h3.28v6.97c0 .414.336.75.75.75m9-12.5a.75.75 0 0 1 .75.75v6.97h3.28a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 0-1.06h3.28V6.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiArrowUpDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftIcon],svg[mynaui-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.5 17.5l-11-11m0 0h9m-9 0v9"></svg:path>`,
})
export class MynauiArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftCircleIcon],svg[mynaui-arrow-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.182 15.182L8.818 8.818m0 4.95v-4.95h4.95"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowUpLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftCircleSolidIcon],svg[mynaui-arrow-up-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m5.818-3.182v4.95a.75.75 0 0 0 1.5 0v-3.14l5.084 5.084a.75.75 0 0 0 1.06-1.06L10.63 9.568h3.139a.75.75 0 0 0 0-1.5h-4.95a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiArrowUpLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftSolidIcon],svg[mynaui-arrow-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.75a.75.75 0 0 1 .75.75l-4.345 4.345l6.125 6.125a.75.75 0 1 1-1.06 1.06l-6.125-6.125L6.5 16.25a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75z"></svg:path>`,
})
export class MynauiArrowUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftSquareIcon],svg[mynaui-arrow-up-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.182 15.182L8.818 8.818m0 4.95v-4.95h4.95"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowUpLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftSquareSolidIcon],svg[mynaui-arrow-up-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.068 8.818v4.95a.75.75 0 0 0 1.5 0v-3.14l5.084 5.084a.75.75 0 0 0 1.06-1.06L10.63 9.568h3.139a.75.75 0 0 0 0-1.5h-4.95a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiArrowUpLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftWavesIcon],svg[mynaui-arrow-up-left-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.182 15.182L8.818 8.818m0 4.95v-4.95h4.95"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowUpLeftWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftWavesSolidIcon],svg[mynaui-arrow-up-left-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.068 8.818a.75.75 0 0 1 .75-.75h4.95a.75.75 0 0 1 0 1.5h-3.14l5.084 5.084a.75.75 0 1 1-1.06 1.06L9.568 10.63v3.139a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class MynauiArrowUpLeftWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightIcon],svg[mynaui-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 17.5l11-11m0 0h-9m9 0v9"></svg:path>`,
})
export class MynauiArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightCircleIcon],svg[mynaui-arrow-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.818 15.182l6.364-6.364m-4.95 0h4.95v4.95"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiArrowUpRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightCircleSolidIcon],svg[mynaui-arrow-up-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m7.232-3.182a.75.75 0 0 1 .75-.75h4.95a.75.75 0 0 1 .75.75v4.95a.75.75 0 1 1-1.5 0v-3.14l-5.084 5.084a.75.75 0 1 1-1.06-1.06l5.083-5.084h-3.139a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiArrowUpRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightSolidIcon],svg[mynaui-arrow-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5.75a.75.75 0 0 0-.75.75l4.345 4.345L5.97 16.97a.75.75 0 1 0 1.06 1.06l6.125-6.125L17.5 16.25a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiArrowUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightSquareIcon],svg[mynaui-arrow-up-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.818 15.182l6.364-6.364m-4.95 0h4.95v4.95"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowUpRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightSquareSolidIcon],svg[mynaui-arrow-up-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.115 6.568c0 .414.336.75.75.75h3.14l-5.084 5.084a.75.75 0 0 0 1.06 1.06l5.084-5.083v3.139a.75.75 0 1 0 1.5 0v-4.95a.75.75 0 0 0-.75-.75h-4.95a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiArrowUpRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightWavesIcon],svg[mynaui-arrow-up-right-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.818 15.182l6.364-6.364m-4.95 0h4.95v4.95"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowUpRightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightWavesSolidIcon],svg[mynaui-arrow-up-right-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M9.482 8.818a.75.75 0 0 1 .75-.75h4.95a.75.75 0 0 1 .75.75v4.95a.75.75 0 1 1-1.5 0v-3.14l-5.084 5.084a.75.75 0 1 1-1.06-1.06l5.083-5.084h-3.139a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiArrowUpRightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpSolidIcon],svg[mynaui-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.513 9.578a.75.75 0 0 1 .034 1.06H12.75V19.5a.75.75 0 0 1-1.5 0v-8.862H5.453a.75.75 0 0 1 .034-1.06l6-5.625a.75.75 0 0 1 1.026 0z"></svg:path>`,
})
export class MynauiArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpSquareIcon],svg[mynaui-arrow-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 16.5v-9M8.5 11L12 7.5l3.5 3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiArrowUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpSquareSolidIcon],svg[mynaui-arrow-up-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.103 4.72l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22v7.19a.75.75 0 0 0 1.5 0V9.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiArrowUpSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpWavesIcon],svg[mynaui-arrow-up-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 16.5v-9M8.5 11L12 7.5l3.5 3.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiArrowUpWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpWavesSolidIcon],svg[mynaui-arrow-up-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0m.905 4.895a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.19a.75.75 0 0 1-1.5 0V9.31l-2.22 2.22a.75.75 0 0 1-1.06-1.06z"></svg:path>`,
})
export class MynauiArrowUpWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskCircleIcon],svg[mynaui-asterisk-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-3.5v7m-3-1.75l6-3.5m-6 0l6 3.5"></svg:path>`,
})
export class MynauiAsteriskCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskCircleSolidIcon],svg[mynaui-asterisk-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12M12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAsteriskCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskDiamondIcon],svg[mynaui-asterisk-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM12 8.5v7m-3-1.75l6-3.5m-6 0l6 3.5"></svg:path>`,
})
export class MynauiAsteriskDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskDiamondSolidIcon],svg[mynaui-asterisk-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAsteriskDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskHexagonIcon],svg[mynaui-asterisk-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8M12 8.5v7m-3-1.75l6-3.5m-6 0l6 3.5"></svg:path>`,
})
export class MynauiAsteriskHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskHexagonSolidIcon],svg[mynaui-asterisk-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAsteriskHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskOctagonIcon],svg[mynaui-asterisk-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132zM12 8.5v7m-3-1.75l6-3.5m-6 0l6 3.5"></svg:path>`,
})
export class MynauiAsteriskOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskOctagonSolidIcon],svg[mynaui-asterisk-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAsteriskOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskSquareIcon],svg[mynaui-asterisk-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm9-.9v7m-3-1.75l6-3.5m-6 0l6 3.5"></svg:path>`,
})
export class MynauiAsteriskSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskSquareSolidIcon],svg[mynaui-asterisk-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAsteriskSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskWavesIcon],svg[mynaui-asterisk-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83M12 8.5v7m-3-1.75l6-3.5m-6 0l6 3.5"></svg:path>`,
})
export class MynauiAsteriskWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAsteriskWavesSolidIcon],svg[mynaui-asterisk-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M12 7.75a.75.75 0 0 1 .75.75v2.194l1.872-1.092a.75.75 0 0 1 .756 1.296L13.488 12l1.89 1.102a.75.75 0 1 1-.756 1.296l-1.872-1.092V15.5a.75.75 0 0 1-1.5 0v-2.194l-1.872 1.092a.75.75 0 1 1-.756-1.296L10.512 12l-1.89-1.102a.75.75 0 1 1 .756-1.296l1.872 1.092V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiAsteriskWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAtIcon],svg[mynaui-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11.996V7.998m0 3.998c0-5.157-8-5.157-8 0c0 5.167 8 5.11 8 0m0 0c0 5 5 5 5 0C21 7.027 16.97 3 12 3s-9 4.027-9 8.996c0 4.968 4.03 8.995 9 8.995c1.675.084 3.938-.421 5.776-1.831"></svg:path>`,
})
export class MynauiAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAtSolidIcon],svg[mynaui-at-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 11.996A8.25 8.25 0 0 1 12 3.75a8.25 8.25 0 0 1 8.25 8.246c0 2.3-1.1 3-1.75 3s-1.75-.7-1.75-3V7.998a.75.75 0 0 0-1.5 0v.538l-.011-.01C14.334 7.75 13.153 7.378 12 7.378s-2.334.37-3.239 1.148c-.92.791-1.511 1.968-1.511 3.47c0 1.504.59 2.68 1.513 3.468c.905.775 2.087 1.14 3.24 1.136c1.152-.005 2.332-.378 3.235-1.153q.353-.301.636-.677c.582 1.087 1.524 1.726 2.626 1.726c1.85 0 3.25-1.8 3.25-4.5c0-5.383-4.366-9.746-9.75-9.746s-9.75 4.363-9.75 9.746c0 5.376 4.356 9.735 9.731 9.745c1.83.087 4.263-.46 6.251-1.986a.75.75 0 1 0-.913-1.19c-1.68 1.29-3.763 1.753-5.282 1.677H12a8.25 8.25 0 0 1-8.25-8.246"></svg:path>`,
})
export class MynauiAtSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAtomIcon],svg[mynaui-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.407 8.593c4.6 4.6 6.802 9.853 4.92 11.735c-1.88 1.881-7.135-.322-11.734-4.921S1.791 5.554 3.673 3.672c1.88-1.881 7.134.322 11.734 4.921"></svg:path><svg:path d="M8.594 8.593c-4.6 4.6-6.803 9.853-4.921 11.735s7.135-.322 11.734-4.921s6.803-9.853 4.921-11.735s-7.135.322-11.734 4.921M11.75 12h.5"></svg:path></svg:g>`,
})
export class MynauiAtomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiAtomSolidIcon],svg[mynaui-atom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.81 3.01c1.016.426 2.094 1.023 3.19 1.768c1.096-.745 2.175-1.342 3.19-1.767c1.115-.468 2.19-.744 3.145-.76c.96-.016 1.865.232 2.523.89c.66.66.908 1.565.892 2.524c-.016.956-.293 2.03-.76 3.145c-.426 1.016-1.023 2.095-1.768 3.19c.745 1.096 1.342 2.175 1.767 3.19c.468 1.115.744 2.189.76 3.145c.016.959-.232 1.864-.891 2.523s-1.564.907-2.523.891c-.956-.016-2.03-.292-3.145-.76c-1.015-.425-2.094-1.022-3.19-1.767c-1.095.745-2.174 1.342-3.19 1.767c-1.114.468-2.188.744-3.144.76c-.96.016-1.865-.232-2.524-.89c-.658-.66-.907-1.565-.891-2.524c.016-.956.293-2.03.76-3.145c.426-1.015 1.022-2.094 1.767-3.19c-.745-1.095-1.341-2.174-1.767-3.19c-.468-1.115-.744-2.189-.76-3.145c-.016-.959.232-1.864.89-2.523c.66-.659 1.565-.907 2.524-.891c.956.016 2.03.292 3.145.76M4.203 4.204c-.282.282-.464.738-.452 1.437c.011.702.22 1.582.643 2.59c.327.78.773 1.616 1.327 2.477c.694-.89 1.478-1.78 2.342-2.644a29 29 0 0 1 2.644-2.342c-.862-.554-1.697-1-2.477-1.327c-1.008-.423-1.888-.632-2.59-.643c-.699-.012-1.155.17-1.437.452m11.734 3.86a29 29 0 0 1 2.342 2.644c.554-.861 1-1.697 1.327-2.477c.423-1.008.632-1.888.644-2.59c.011-.699-.17-1.155-.452-1.437s-.739-.464-1.438-.452c-.702.011-1.581.22-2.59.643a16.3 16.3 0 0 0-2.477 1.327c.89.694 1.78 1.478 2.644 2.342m0 7.874a29 29 0 0 1-2.644 2.342c.862.554 1.697 1 2.477 1.327c1.008.423 1.888.632 2.59.643c.699.012 1.155-.17 1.437-.452s.464-.738.453-1.437c-.012-.702-.221-1.582-.644-2.59a16.3 16.3 0 0 0-1.327-2.477c-.693.89-1.478 1.78-2.342 2.644m-7.874 0a29 29 0 0 1-2.342-2.644c-.554.862-1 1.697-1.327 2.477c-.423 1.008-.631 1.888-.643 2.59c-.012.699.17 1.155.452 1.437s.739.464 1.438.453c.702-.012 1.581-.221 2.59-.644a16 16 0 0 0 2.476-1.327a29 29 0 0 1-2.644-2.342m3.687-4.687a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiAtomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBabyIcon],svg[mynaui-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1M12.25 3a2.25 2.25 0 1 0 1.5 3.927m-4 3.373c-.214-.19-.473-.3-.75-.3s-.536.11-.75.3m7.5 0c-.214-.19-.473-.3-.75-.3s-.536.11-.75.3"></svg:path></svg:g>`,
})
export class MynauiBabyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBabySolidIcon],svg[mynaui-baby-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.161 2.251l.089-.001q.048 0 .095.006C17.57 2.438 21.75 6.731 21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12S6.615 2.25 12 2.25zM9.46 4.15a3 3 0 0 0 4.791 3.337a.75.75 0 1 0-1-1.118a1.5 1.5 0 1 1-1.074-2.616a8.3 8.3 0 0 0-2.717.397M9 9.25c-.486 0-.916.195-1.247.488a.75.75 0 1 0 .994 1.124A.38.38 0 0 1 9 10.75a.38.38 0 0 1 .253.112a.75.75 0 1 0 .994-1.124A1.88 1.88 0 0 0 9 9.25m6 0c-.486 0-.916.195-1.247.488a.75.75 0 1 0 .994 1.124a.38.38 0 0 1 .253-.112a.38.38 0 0 1 .253.112a.75.75 0 1 0 .994-1.124A1.88 1.88 0 0 0 15 9.25m-5.553 5.148a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852"></svg:path>`,
})
export class MynauiBabySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBanIcon],svg[mynaui-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-3-6L6 18"></svg:path></svg:g>`,
})
export class MynauiBanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBanSolidIcon],svg[mynaui-ban-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a8.25 8.25 0 0 0-6.34 13.53L17.28 5.66A8.22 8.22 0 0 0 12 3.75M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"></svg:path>`,
})
export class MynauiBanSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBankIcon],svg[mynaui-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.94V18m5-9.06V18M7 8.94V18m5.447-14.894l7.764 3.908c.944.475.608 1.907-.447 1.907H4.236c-1.055 0-1.391-1.432-.447-1.907l7.764-3.908a1 1 0 0 1 .894 0M19.5 21h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class MynauiBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBankSolidIcon],svg[mynaui-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.784 2.436a1.74 1.74 0 0 0-1.568 0L3.452 6.344c-1.64.825-1.074 3.327.784 3.327H6.25v7.579H4.5a2.25 2.25 0 0 0 0 4.5h15a2.25 2.25 0 0 0 0-4.5h-1.75V9.67h2.014c1.858 0 2.423-2.501.784-3.326zM7.75 17.25V9.67h3.5v7.58zm5 0V9.67h3.5v7.58z"></svg:path>`,
})
export class MynauiBankSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBaseballIcon],svg[mynaui-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M3.804 9.804c5.022.94 7.697 5.573 6 10.392m10.392-6c-5.022-.94-7.697-5.573-6-10.392"></svg:path></svg:g>`,
})
export class MynauiBaseballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBaseballSolidIcon],svg[mynaui-baseball-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.871 10.582q-.12.691-.121 1.418a8.25 8.25 0 0 0 5.413 7.75c1.383-4.247-.923-8.242-5.292-9.168m10.966-6.331c-1.383 4.246.923 8.241 5.292 9.167q.12-.691.121-1.418a8.25 8.25 0 0 0-5.413-7.75M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"></svg:path>`,
})
export class MynauiBaseballSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingIcon],svg[mynaui-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 7H18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5m-7-10H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5M21 11v2m-9.999-6L8.5 12h5.002L11 17"></svg:path>`,
})
export class MynauiBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingFourIcon],svg[mynaui-battery-charging-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2M6.5 10v4m3-4v4m3-4v4m3-2v2"></svg:path>`,
})
export class MynauiBatteryChargingFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingFourSolidIcon],svg[mynaui-battery-charging-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm5 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm5.5-1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryChargingFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingOneIcon],svg[mynaui-battery-charging-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2M6.5 10v4"></svg:path>`,
})
export class MynauiBatteryChargingOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingOneSolidIcon],svg[mynaui-battery-charging-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm5 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm14.5 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryChargingOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingSolidIcon],svg[mynaui-battery-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.989 6.25H4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h5.293a1 1 0 0 1 .036-.086l2.959-4.913H8.5a.75.75 0 0 1-.67-1.086z"></svg:path><svg:path d="M11.013 17.75H18A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25h-5.292a1 1 0 0 1-.036.085l-2.958 4.916h3.788a.75.75 0 0 1 .67 1.085zM21.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path></svg:g>`,
})
export class MynauiBatteryChargingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingThreeIcon],svg[mynaui-battery-charging-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2M6.5 10v4m3-4v4m3-4v4"></svg:path>`,
})
export class MynauiBatteryChargingThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingThreeSolidIcon],svg[mynaui-battery-charging-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm5 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm8.5 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryChargingThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingTwoIcon],svg[mynaui-battery-charging-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2M6.5 10v4m3-4v4"></svg:path>`,
})
export class MynauiBatteryChargingTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingTwoSolidIcon],svg[mynaui-battery-charging-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm5 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm11.5 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryChargingTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryCheckIcon],svg[mynaui-battery-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2"></svg:path><svg:path d="m9.26 12.242l1.034 1.181c.095.109.266.1.35-.016l2.1-2.907"></svg:path></svg:g>`,
})
export class MynauiBatteryCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryCheckSolidIcon],svg[mynaui-battery-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm11.102 2.94a.75.75 0 0 0-1.216-.88l-1.713 2.372l-.599-.684a.75.75 0 1 0-1.128.988l1.034 1.181a.974.974 0 0 0 1.522-.07zm8.398.06a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryEmptyIcon],svg[mynaui-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2"></svg:path>`,
})
export class MynauiBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryEmptySolidIcon],svg[mynaui-battery-empty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-17-4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h14A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25z"></svg:path>`,
})
export class MynauiBatteryEmptySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryFullIcon],svg[mynaui-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m3 4v2M6.5 10v4m3-4v4m3-4v4m3-4v4"></svg:path>`,
})
export class MynauiBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryFullSolidIcon],svg[mynaui-battery-full-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm5 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm5.5 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryFullSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryMinusIcon],svg[mynaui-battery-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-9 5h4m8-1v2"></svg:path>`,
})
export class MynauiBatteryMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryMinusSolidIcon],svg[mynaui-battery-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zM9 11.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM21.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryPlusIcon],svg[mynaui-battery-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-9 5h4m-2-2v4m10-3v2"></svg:path>`,
})
export class MynauiBatteryPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryPlusSolidIcon],svg[mynaui-battery-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm9.5 2a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0 0 1.5h1.25V14a.75.75 0 0 0 1.5 0v-1.25H13a.75.75 0 0 0 0-1.5h-1.25zm10 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryXIcon],svg[mynaui-battery-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-8.5 3.5l3 3m0-3l-3 3M21 11v2"></svg:path>`,
})
export class MynauiBatteryXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryXSolidIcon],svg[mynaui-battery-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm7.78 1.97a.75.75 0 1 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zM21.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellIcon],svg[mynaui-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path>`,
})
export class MynauiBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellCheckIcon],svg[mynaui-bell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.6 10.323l1.379 1.575a.3.3 0 0 0 .466-.022L14.245 8"></svg:path><svg:path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path></svg:g>`,
})
export class MynauiBellCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellCheckSolidIcon],svg[mynaui-bell-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5m7.685 4.71a.75.75 0 0 0-1.216-.88l-2.468 3.417l-1.005-1.148a.75.75 0 0 0-1.129.987l1.38 1.576c.443.507 1.244.47 1.638-.077z"></svg:path>`,
})
export class MynauiBellCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellHomeIcon],svg[mynaui-bell-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path><svg:path d="M10.75 12.5a1 1 0 0 1-1-1V9.14L12 7.5l2.25 1.64v2.36a1 1 0 0 1-1 1z"></svg:path></svg:g>`,
})
export class MynauiBellHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellHomeSolidIcon],svg[mynaui-bell-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 11.5V9.522L12 8.428l1.5 1.094V11.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5m5.274 3.164a.75.75 0 0 0-.884 0l-2.25 1.64A.75.75 0 0 0 9 9.14v2.36c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 11.5V9.14a.75.75 0 0 0-.308-.606z"></svg:path></svg:g>`,
})
export class MynauiBellHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellMinusIcon],svg[mynaui-bell-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 10h5m.519 7h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path>`,
})
export class MynauiBellMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellMinusSolidIcon],svg[mynaui-bell-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5M9.5 9.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiBellMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellOnIcon],svg[mynaui-bell-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path></svg:g>`,
})
export class MynauiBellOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellOnSolidIcon],svg[mynaui-bell-on-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5M12 7.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path></svg:g>`,
})
export class MynauiBellOnSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellPlusIcon],svg[mynaui-bell-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 10h5M12 7.5v5m3.019 4.5h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path>`,
})
export class MynauiBellPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellPlusSolidIcon],svg[mynaui-bell-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5M12.75 7.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class MynauiBellPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellSlashIcon],svg[mynaui-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804c-1.903-1.89-1.242-5.145-1.78-7.66M15.02 17c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4m0 0H7m-4 4l4-4M21 3l-3.536 3.536m0 0L7 17m8.5-13.312C14.687 3.253 13.563 3 12 3c-8.68 0-3.826 7.8-7.244 11.196a2.7 2.7 0 0 0-.626.99"></svg:path>`,
})
export class MynauiBellSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellSlashSolidIcon],svg[mynaui-bell-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.649 3.189C7.859 2.03 9.63 1.5 11.999 1.5s4.141.53 5.351 1.689c.44.421.77.892 1.017 1.383L20.47 2.47a.75.75 0 1 1 1.06 1.06l-2.616 2.617c.075.337.128.67.169.99c.079.628.115 1.274.148 1.862l.004.078c.036.63.07 1.2.141 1.74c.145 1.084.417 1.812.924 2.315c.701.697 1.264 1.799 1.194 2.914c-.038.604-.274 1.278-.861 1.784c-.573.494-1.295.67-2 .67h-2.237c-.119.678-.336 1.373-.713 1.997c-.726 1.201-1.963 2.003-3.684 2.003c-1.72 0-2.958-.802-3.683-2.003c-.377-.624-.595-1.319-.713-1.997H6.561l-3.03 3.03a.75.75 0 0 1-1.061-1.06l2.06-2.06a2.7 2.7 0 0 1-1.185-.594c-.59-.52-.813-1.206-.842-1.807c-.052-1.106.513-2.198 1.196-2.877c.507-.503.779-1.231.923-2.316c.072-.539.106-1.108.142-1.739L4.768 9c.033-.588.07-1.234.148-1.861c.163-1.296.536-2.803 1.733-3.95"></svg:path>`,
})
export class MynauiBellSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellSnoozeIcon],svg[mynaui-bell-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.75 8h2.5l-2.5 4h2.5"></svg:path><svg:path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path></svg:g>`,
})
export class MynauiBellSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellSnoozeSolidIcon],svg[mynaui-bell-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5m3.582 3.52a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiBellSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellSolidIcon],svg[mynaui-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.737 17.75c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5C8.182 2.758 9.73 2.25 11.999 2.25s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488z"></svg:path>`,
})
export class MynauiBellSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellUserIcon],svg[mynaui-bell-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path><svg:path d="M15 13.5c0-3.861-6-3.861-6 0"></svg:path><svg:path d="M12 10.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiBellUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellUserSolidIcon],svg[mynaui-bell-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 8.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5M12 5.75a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 12 5.75"></svg:path></svg:g>`,
})
export class MynauiBellUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellXIcon],svg[mynaui-bell-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 8l4 4m0-4l-4 4m5.019 5h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4"></svg:path>`,
})
export class MynauiBellXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBellXSolidIcon],svg[mynaui-bell-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.168 3.73c1.014-.971 2.562-1.48 4.831-1.48s3.818.509 4.832 1.48c1.008.965 1.352 2.26 1.508 3.501c.075.602.11 1.226.144 1.822l.003.066c.036.627.07 1.225.147 1.796c.153 1.147.458 2.073 1.138 2.75c.588.584 1.028 1.485.975 2.334c-.028.448-.2.916-.603 1.263c-.396.342-.923.488-1.51.488h-2.896c-.07.813-.27 1.654-.696 2.36c-.592.98-1.588 1.64-3.042 1.64s-2.449-.66-3.04-1.64c-.427-.706-.627-1.547-.697-2.36H5.366c-.596 0-1.129-.148-1.526-.497c-.403-.356-.566-.831-.588-1.28c-.04-.846.405-1.742.976-2.309c.68-.676.985-1.602 1.138-2.749c.076-.571.111-1.169.146-1.796l.004-.066c.034-.596.069-1.22.144-1.822c.156-1.241.5-2.536 1.508-3.5m3.362 3.74a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94z"></svg:path>`,
})
export class MynauiBellXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinIcon],svg[mynaui-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.273 5.25V3m0 2.25H8.182m1.09 0h4.364m0 0V3m0 2.25c1.808 0 3.273 1.511 3.273 3.375S15.444 12 13.636 12m-4.363 9v-2.25m0 0H8.182m1.09 0h4.364m0 2.25v-2.25m0 0h1.091c1.808 0 3.273-1.511 3.273-3.375S16.535 12 14.727 12h-1.09M6 5.25h2.182m0 0V12m5.454 0H8.182M6 18.75h2.182m0 0V12"></svg:path>`,
})
export class MynauiBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinCircleIcon],svg[mynaui-bitcoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"></svg:path></svg:g>`,
})
export class MynauiBitcoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinCircleSolidIcon],svg[mynaui-bitcoin-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinDiamondIcon],svg[mynaui-bitcoin-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"></svg:path></svg:g>`,
})
export class MynauiBitcoinDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinDiamondSolidIcon],svg[mynaui-bitcoin-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M12.75 6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinHexagonIcon],svg[mynaui-bitcoin-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"></svg:path></svg:g>`,
})
export class MynauiBitcoinHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinHexagonSolidIcon],svg[mynaui-bitcoin-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM12.75 6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinOctagonIcon],svg[mynaui-bitcoin-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"></svg:path></svg:g>`,
})
export class MynauiBitcoinOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinOctagonSolidIcon],svg[mynaui-bitcoin-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M12.75 6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinSolidIcon],svg[mynaui-bitcoin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.273 2.25a.75.75 0 0 1 .75.75v1.5h2.863V3a.75.75 0 0 1 1.5 0v1.571c1.878.362 3.273 2.056 3.273 4.054a4.17 4.17 0 0 1-1.258 2.997c1.393.654 2.349 2.1 2.349 3.753c0 2.256-1.78 4.125-4.023 4.125h-.34V21a.75.75 0 0 1-1.5 0v-1.5h-2.864V21a.75.75 0 1 1-1.5 0v-1.5H6A.75.75 0 0 1 6 18h1.432V6H6a.75.75 0 0 1 0-1.5h2.523V3a.75.75 0 0 1 .75-.75M8.932 6v5.25h4.704c1.372 0 2.523-1.153 2.523-2.625S15.008 6 13.636 6zm0 6.75V18h5.795c1.372 0 2.523-1.153 2.523-2.625s-1.151-2.625-2.523-2.625z"></svg:path>`,
})
export class MynauiBitcoinSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinSquareIcon],svg[mynaui-bitcoin-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"></svg:path></svg:g>`,
})
export class MynauiBitcoinSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinSquareSolidIcon],svg[mynaui-bitcoin-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M12.75 6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinWavesIcon],svg[mynaui-bitcoin-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M12 8V6m0 12v-2m-3-4h4a2 2 0 1 0 0-4H9zm0 0h5a2 2 0 1 1 0 4H9z"></svg:path></svg:g>`,
})
export class MynauiBitcoinWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBitcoinWavesSolidIcon],svg[mynaui-bitcoin-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 11.25v-2.5H13a1.25 1.25 0 1 1 0 2.5zm0 4v-2.5H14a1.25 1.25 0 1 1 0 2.5z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12.75 6a.75.75 0 0 0-1.5 0v1.25H9a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h2.25V18a.75.75 0 0 0 1.5 0v-1.25H14a2.75 2.75 0 0 0 1.266-5.192A2.75 2.75 0 0 0 13 7.25h-.25z"></svg:path></svg:g>`,
})
export class MynauiBitcoinWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBluetoothIcon],svg[mynaui-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 7.678l10.54 8.558c.242.196.363.294.408.41c.04.104.042.216.004.32c-.042.117-.16.218-.396.42l-3.57 3.05c-.432.37-.649.556-.833.564a.53.53 0 0 1-.416-.174c-.118-.133-.118-.408-.118-.958V4.132c0-.55 0-.825.118-.958A.53.53 0 0 1 12.653 3c.184.008.4.193.833.563l3.603 3.08c.226.192.339.289.382.402c.037.1.039.21.004.31c-.04.115-.15.214-.371.412L6.5 17.283"></svg:path>`,
})
export class MynauiBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBluetoothSolidIcon],svg[mynaui-bluetooth-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.37 10.665l-4.397-3.57a.75.75 0 0 0-.946 1.165l4.938 4.009l-4.966 4.456a.75.75 0 1 0 1.002 1.116l4.368-3.92V19.9c0 .247 0 .484.018.675c.018.181.062.492.288.748c.258.292.633.442 1.01.426c.322-.014.575-.176.727-.284c.158-.113.342-.27.54-.439l3.608-3.084c.103-.088.213-.182.3-.27a1.24 1.24 0 0 0 .298-.453a1.2 1.2 0 0 0-.011-.844a1.24 1.24 0 0 0-.309-.444a5 5 0 0 0-.308-.263l-4.256-3.456l4.347-3.901c.096-.087.2-.18.282-.267c.091-.097.21-.24.28-.442a1.2 1.2 0 0 0-.01-.821c-.076-.2-.198-.34-.291-.435a5 5 0 0 0-.29-.26l-3.64-3.112a9 9 0 0 0-.54-.439c-.152-.108-.405-.27-.727-.284a1.27 1.27 0 0 0-1.01.426c-.226.256-.27.567-.288.748c-.018.19-.018.428-.018.675z"></svg:path>`,
})
export class MynauiBluetoothSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBoatIcon],svg[mynaui-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.8 17.194l-.597-3.343a2 2 0 0 1 1.326-2.246l.17-.058m0 0l5.659-1.92a2 2 0 0 1 1.284 0l5.658 1.92m-12.6 0v-3.8a2 2 0 0 1 2-2h2.5m8.1 5.8l.17.058a2 2 0 0 1 1.327 2.246l-.597 3.342m-.9-5.646v-3.8a2 2 0 0 0-2-2h-2.5m-3.6 0h3.6m-3.6 0V4.8a1.8 1.8 0 0 1 3.6 0v.947M3 20.399c.647.657 2.222.843 3.725.216c1.032-.43 2.336-.441 3.391-.071a5.83 5.83 0 0 0 3.768 0c1.055-.37 2.359-.36 3.39.07c1.504.628 3.08.442 3.726-.216"></svg:path>`,
})
export class MynauiBoatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBoatSolidIcon],svg[mynaui-boat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.55 4.997V4.8a2.55 2.55 0 0 0-5.1 0v.197H7.7a2.75 2.75 0 0 0-2.75 2.75v3.288a2.75 2.75 0 0 0-1.486 2.947l.598 3.344a.75.75 0 0 0 1.476-.264l-.597-3.344a1.25 1.25 0 0 1 .829-1.403l5.829-1.977a1.25 1.25 0 0 1 .803 0l5.828 1.977c.585.198.938.795.83 1.404l-.598 3.343a.75.75 0 1 0 1.476.264l.598-3.344a2.75 2.75 0 0 0-1.486-2.947V7.747a2.75 2.75 0 0 0-2.75-2.75zM9.868 21.251c-.892-.312-2.004-.298-2.854.056a5.6 5.6 0 0 1-2.53.43c-.761-.058-1.52-.306-2.019-.813a.75.75 0 1 1 1.07-1.051c.148.15.5.325 1.063.367a4.1 4.1 0 0 0 1.839-.317c1.214-.506 2.709-.514 3.927-.087a5.08 5.08 0 0 0 3.272 0c1.218-.427 2.713-.42 3.927.087a4.1 4.1 0 0 0 1.84.318c.562-.043.914-.217 1.062-.368a.75.75 0 1 1 1.07 1.051c-.498.507-1.258.755-2.02.812a5.6 5.6 0 0 1-2.529-.429c-.85-.354-1.962-.368-2.854-.056a6.58 6.58 0 0 1-4.264 0"></svg:path>`,
})
export class MynauiBoatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookIcon],svg[mynaui-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"></svg:path>`,
})
export class MynauiBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookCheckIcon],svg[mynaui-book-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"></svg:path><svg:path d="m9.6 10.323l1.379 1.575a.3.3 0 0 0 .466-.022L14.245 8"></svg:path></svg:g>`,
})
export class MynauiBookCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookCheckSolidIcon],svg[mynaui-book-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 2.25c.667 0 1.336.109 1.803.593c.46.478.547 1.14.547 1.757v11.8c0 .543-.072 1.077-.35 1.509a1.65 1.65 0 0 1-.65.583v.908c0 .666-.108 1.335-.591 1.802c-.478.462-1.14.548-1.757.548H5.75a1.5 1.5 0 0 1-1.5-1.5V6.017c-.003-.498-.006-1.12.13-1.687c.167-.692.552-1.363 1.371-1.78c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03zm-.998 18c.547 0 .683-.096.714-.126c.025-.024.134-.155.134-.724v-.65h-10a1.5 1.5 0 0 0-1.5 1.5zm-1.55-11.81a.75.75 0 0 0-1.215-.88l-2.468 3.417l-1.005-1.148a.75.75 0 0 0-1.129.987l1.38 1.576c.443.507 1.244.47 1.638-.077z"></svg:path>`,
})
export class MynauiBookCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookDotIcon],svg[mynaui-book-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"></svg:path><svg:path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiBookDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookDotSolidIcon],svg[mynaui-book-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M17.4 2.25H8.17c-.534 0-.98 0-1.345.03c-.38.03-.736.098-1.074.27c-.82.417-1.204 1.088-1.37 1.78c-.137.566-.134 1.189-.132 1.687l.001.183v14.05a1.5 1.5 0 0 0 1.5 1.5h10.652c.617 0 1.28-.086 1.756-.548c.484-.467.592-1.137.592-1.802v-.908a1.65 1.65 0 0 0 .65-.583c.278-.432.35-.966.35-1.509V4.6c0-.616-.086-1.28-.547-1.757c-.467-.484-1.136-.593-1.803-.593m-.998 18H5.75a1.5 1.5 0 0 1 1.5-1.5h10v.65c0 .57-.11.7-.134.724c-.031.03-.167.126-.714.126M12 7.25a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"></svg:path></svg:g>`,
})
export class MynauiBookDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookHomeIcon],svg[mynaui-book-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"></svg:path><svg:path d="M10.75 12.5a1 1 0 0 1-1-1V9.14L12 7.5l2.25 1.64v2.36a1 1 0 0 1-1 1z"></svg:path></svg:g>`,
})
export class MynauiBookHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookHomeSolidIcon],svg[mynaui-book-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 11.5V9.522L12 8.428l1.5 1.094V11.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M17.4 2.25c.667 0 1.336.109 1.803.593c.46.478.547 1.14.547 1.757v11.8c0 .543-.072 1.077-.35 1.509a1.65 1.65 0 0 1-.65.583v.908c0 .666-.108 1.335-.591 1.802c-.478.462-1.14.548-1.757.548H5.75a1.5 1.5 0 0 1-1.5-1.5V6.017c-.003-.498-.006-1.12.13-1.687c.167-.692.552-1.363 1.371-1.78c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03zm-.998 18c.547 0 .683-.096.714-.126c.025-.024.134-.155.134-.724v-.65h-10a1.5 1.5 0 0 0-1.5 1.5zm-3.96-13.356a.75.75 0 0 0-.884 0l-2.25 1.64A.75.75 0 0 0 9 9.14v2.36c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 11.5V9.14a.75.75 0 0 0-.308-.606z"></svg:path></svg:g>`,
})
export class MynauiBookHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookMinusIcon],svg[mynaui-book-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555M9.5 10h5"></svg:path>`,
})
export class MynauiBookMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookMinusSolidIcon],svg[mynaui-book-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 2.25H8.17c-.534 0-.98 0-1.345.03c-.38.03-.736.098-1.074.27c-.82.417-1.204 1.088-1.37 1.78c-.137.566-.134 1.189-.132 1.687l.001.183v14.05a1.5 1.5 0 0 0 1.5 1.5h10.652c.617 0 1.28-.086 1.756-.548c.484-.467.592-1.137.592-1.802v-.908a1.65 1.65 0 0 0 .65-.583c.278-.432.35-.966.35-1.509V4.6c0-.616-.086-1.28-.547-1.757c-.467-.484-1.136-.593-1.803-.593m-.998 18H5.75a1.5 1.5 0 0 1 1.5-1.5h10v.65c0 .57-.11.7-.134.724c-.031.03-.167.126-.714.126M9.5 9.25h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiBookMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookOpenIcon],svg[mynaui-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9.8V20m0-10.2c0-1.704.107-3.584-1.638-4.473C9.72 5 8.88 5 7.2 5H4.6C3.364 5 3 5.437 3 6.6v8.8c0 .568-.036 1.195.546 1.491c.214.109.493.109 1.052.109H7.43c2.377 0 3.26 1.036 4.569 3m0-10.2c0-1.704-.108-3.584 1.638-4.473C14.279 5 15.12 5 16.8 5h2.6c1.235 0 1.6.436 1.6 1.6v8.8c0 .567.035 1.195-.546 1.491c-.213.109-.493.109-1.052.109h-2.833c-2.377 0-3.26 1.036-4.57 3"></svg:path>`,
})
export class MynauiBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookOpenSolidIcon],svg[mynaui-book-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.776a3.4 3.4 0 0 0-1.298-1.117c-.444-.227-.924-.321-1.47-.366c-.532-.043-1.187-.043-2-.043H4.6c-.667 0-1.337.109-1.803.593c-.461.478-.547 1.14-.547 1.757v8.887c-.002.244-.004.604.076.936c.103.427.35.867.88 1.136c.23.118.463.157.675.175c.198.016.434.016.69.016h2.86c1.066 0 1.714.228 2.239.616c.563.417 1.046 1.06 1.706 2.05a.75.75 0 0 0 1.248 0c.66-.99 1.144-1.633 1.706-2.05c.525-.388 1.173-.616 2.24-.616h2.858c.257 0 .493 0 .69-.016a1.8 1.8 0 0 0 .677-.175c.529-.269.777-.71.88-1.136c.08-.332.077-.693.075-.937V6.6c0-.617-.086-1.28-.547-1.757c-.467-.484-1.137-.593-1.803-.593h-2.632c-.813 0-1.469 0-2 .043c-.546.045-1.027.14-1.47.366A3.4 3.4 0 0 0 12 5.776"></svg:path>`,
})
export class MynauiBookOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookPlusIcon],svg[mynaui-book-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555M9.5 10h5M12 7.5v5"></svg:path>`,
})
export class MynauiBookPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookPlusSolidIcon],svg[mynaui-book-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 2.25H8.17c-.534 0-.98 0-1.345.03c-.38.03-.736.098-1.074.27c-.82.417-1.204 1.088-1.37 1.78c-.137.566-.134 1.189-.132 1.687l.001.183v14.05a1.5 1.5 0 0 0 1.5 1.5h10.652c.617 0 1.28-.086 1.756-.548c.484-.467.592-1.137.592-1.802v-.908a1.65 1.65 0 0 0 .65-.583c.278-.432.35-.966.35-1.509V4.6c0-.616-.086-1.28-.547-1.757c-.467-.484-1.136-.593-1.803-.593m-.998 18H5.75a1.5 1.5 0 0 1 1.5-1.5h10v.65c0 .57-.11.7-.134.724c-.031.03-.167.126-.714.126M12.75 7.5v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V7.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiBookPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookSlashIcon],svg[mynaui-book-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555M21 3L3 21"></svg:path>`,
})
export class MynauiBookSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookSlashSolidIcon],svg[mynaui-book-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 2.25h9.23c.667 0 1.336.109 1.803.593c.157.162.27.346.351.542l.916-.915a.75.75 0 1 1 1.06 1.06l-1.78 1.78V16.4c0 .543-.072 1.077-.35 1.509a1.65 1.65 0 0 1-.65.583v.908c0 .666-.108 1.335-.591 1.802c-.478.462-1.14.548-1.757.548H5.75a1.5 1.5 0 0 1-1.421-1.018l-.799.798a.75.75 0 0 1-1.06-1.06l1.78-1.78V6.016c-.003-.498-.006-1.12.13-1.687c.167-.692.552-1.363 1.371-1.78c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03m8.232 18c.547 0 .683-.096.714-.126c.025-.024.134-.155.134-.724v-.65h-10a1.5 1.5 0 0 0-1.5 1.5z"></svg:path>`,
})
export class MynauiBookSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookSnoozeIcon],svg[mynaui-book-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"></svg:path><svg:path d="M10.75 8h2.5l-2.5 4h2.5"></svg:path></svg:g>`,
})
export class MynauiBookSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookSnoozeSolidIcon],svg[mynaui-book-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 2.25c.667 0 1.336.109 1.803.593c.46.478.547 1.14.547 1.757v11.8c0 .543-.072 1.077-.35 1.509a1.65 1.65 0 0 1-.65.583v.908c0 .666-.108 1.335-.591 1.802c-.478.462-1.14.548-1.757.548H5.75a1.5 1.5 0 0 1-1.5-1.5V6.017c-.003-.498-.006-1.12.13-1.687c.167-.692.552-1.363 1.371-1.78c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03zm-.998 18c.547 0 .683-.096.714-.126c.025-.024.134-.155.134-.724v-.65h-10a1.5 1.5 0 0 0-1.5 1.5zm-5.652-13a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiBookSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookSolidIcon],svg[mynaui-book-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 2.25h9.23c.667 0 1.336.109 1.803.593c.46.478.547 1.14.547 1.757v11.8c0 .543-.072 1.077-.35 1.509a1.65 1.65 0 0 1-.65.583v.908c0 .666-.108 1.335-.591 1.802c-.478.462-1.14.548-1.757.548H5.75a1.5 1.5 0 0 1-1.5-1.5V6.017c-.003-.498-.006-1.12.13-1.687c.167-.692.552-1.363 1.371-1.78c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03m-2.42 18h10.652c.547 0 .683-.096.714-.126c.025-.024.134-.155.134-.724v-.65h-10a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class MynauiBookSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookUserIcon],svg[mynaui-book-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555"></svg:path><svg:path d="M15 14c0-3.861-6-3.861-6 0"></svg:path><svg:path d="M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiBookUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookUserSolidIcon],svg[mynaui-book-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M17.4 2.25H8.17c-.534 0-.98 0-1.345.03c-.38.03-.736.098-1.074.27c-.82.417-1.204 1.088-1.37 1.78c-.137.566-.134 1.189-.132 1.687l.001.183v14.05a1.5 1.5 0 0 0 1.5 1.5h10.652c.617 0 1.28-.086 1.756-.548c.484-.467.592-1.137.592-1.802v-.908a1.65 1.65 0 0 0 .65-.583c.278-.432.35-.966.35-1.509V4.6c0-.616-.086-1.28-.547-1.757c-.467-.484-1.136-.593-1.803-.593m-.998 18H5.75a1.5 1.5 0 0 1 1.5-1.5h10v.65c0 .57-.11.7-.134.724c-.031.03-.167.126-.714.126M12 6.25a2.75 2.75 0 0 1 2.01 4.627q.286.164.54.382c.734.629 1.2 1.563 1.2 2.741a.75.75 0 0 1-1.5 0c0-.752-.284-1.266-.676-1.603c-.408-.35-.977-.543-1.574-.543s-1.166.193-1.574.543c-.392.337-.676.85-.676 1.603a.75.75 0 0 1-1.5 0c0-1.178.466-2.112 1.2-2.741q.254-.219.54-.382A2.75 2.75 0 0 1 12 6.25"></svg:path></svg:g>`,
})
export class MynauiBookUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookXIcon],svg[mynaui-book-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20.25c0 .414.336.75.75.75h10.652C17.565 21 18 20.635 18 19.4v-1.445M5 20.25A2.25 2.25 0 0 1 7.25 18h10.152q.339 0 .598-.045M5 20.25V6.2c0-1.136-.072-2.389 1.092-2.982C6.52 3 7.08 3 8.2 3h9.2c1.236 0 1.6.437 1.6 1.6v11.8c0 .995-.282 1.425-1 1.555M10 8l4 4m0-4l-4 4"></svg:path>`,
})
export class MynauiBookXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookXSolidIcon],svg[mynaui-book-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 2.25c.667 0 1.336.109 1.803.593c.46.478.547 1.14.547 1.757v11.8c0 .543-.072 1.077-.35 1.509a1.65 1.65 0 0 1-.65.583v.908c0 .666-.108 1.335-.591 1.802c-.478.462-1.14.548-1.757.548H5.75a1.5 1.5 0 0 1-1.5-1.5V6.017c-.003-.498-.006-1.12.13-1.687c.167-.692.552-1.363 1.371-1.78c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03zm-.998 18c.547 0 .683-.096.714-.126c.025-.024.134-.155.134-.724v-.65h-10a1.5 1.5 0 0 0-1.5 1.5zM10.53 7.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94z"></svg:path>`,
})
export class MynauiBookXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkIcon],svg[mynaui-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path>`,
})
export class MynauiBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkCheckIcon],svg[mynaui-bookmark-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path><svg:path d="m9.7 9.822l1.379 1.576a.3.3 0 0 0 .466-.022l2.8-3.876"></svg:path></svg:g>`,
})
export class MynauiBookmarkCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkCheckSolidIcon],svg[mynaui-bookmark-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zm9.703 3.997a.75.75 0 0 0-1.216-.878l-2.467 3.416l-1.006-1.148a.75.75 0 0 0-1.128.987l1.378 1.576a1.05 1.05 0 0 0 1.64-.077z"></svg:path>`,
})
export class MynauiBookmarkCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkDotIcon],svg[mynaui-bookmark-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path><svg:path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiBookmarkDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkDotSolidIcon],svg[mynaui-bookmark-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zM12 7.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path></svg:g>`,
})
export class MynauiBookmarkDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkHomeIcon],svg[mynaui-bookmark-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path><svg:path d="M10.75 12.5a1 1 0 0 1-1-1V9.14L12 7.5l2.25 1.64v2.36a1 1 0 0 1-1 1z"></svg:path></svg:g>`,
})
export class MynauiBookmarkHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkHomeSolidIcon],svg[mynaui-bookmark-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 11.5V9.522L12 8.428l1.5 1.094V11.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zm7.192 2.952a.75.75 0 0 0-.884 0l-2.25 1.64A.75.75 0 0 0 9 9.14v2.36c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 11.5V9.14a.75.75 0 0 0-.308-.606z"></svg:path></svg:g>`,
})
export class MynauiBookmarkHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkMinusIcon],svg[mynaui-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0zM9.5 9.5h5"></svg:path>`,
})
export class MynauiBookmarkMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkMinusSolidIcon],svg[mynaui-bookmark-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zM9.5 8.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiBookmarkMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkPlusIcon],svg[mynaui-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0zM9.5 9.5h5M12 7v5"></svg:path>`,
})
export class MynauiBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkPlusSolidIcon],svg[mynaui-bookmark-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zM12.75 7a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75V12a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class MynauiBookmarkPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSlashIcon],svg[mynaui-bookmark-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0zM21 3L3 21"></svg:path>`,
})
export class MynauiBookmarkSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSlashSolidIcon],svg[mynaui-bookmark-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-2.78 2.78v13.642c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518v-.141l-1.72 1.72a.75.75 0 0 1-1.06-1.061l2.78-2.78V3.941c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v.247l1.72-1.72a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiBookmarkSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSnoozeIcon],svg[mynaui-bookmark-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path><svg:path d="M10.75 8h2.5l-2.5 4h2.5"></svg:path></svg:g>`,
})
export class MynauiBookmarkSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSnoozeSolidIcon],svg[mynaui-bookmark-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zm5.5 3.308a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiBookmarkSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkSolidIcon],svg[mynaui-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.25c-.979 0-1.5.926-1.5 1.692v16.01c0 1.352 1.469 2.308 2.686 1.518l3.945-2.561a.21.21 0 0 1 .238 0l3.945 2.561c1.217.79 2.686-.165 2.686-1.518V3.942c0-.766-.521-1.692-1.5-1.692z"></svg:path>`,
})
export class MynauiBookmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkUserIcon],svg[mynaui-bookmark-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0z"></svg:path><svg:path d="M15 14c0-3.861-6-3.861-6 0"></svg:path><svg:path d="M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiBookmarkUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkUserSolidIcon],svg[mynaui-bookmark-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zM12 6.25a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 12 6.25"></svg:path></svg:g>`,
})
export class MynauiBookmarkUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkXIcon],svg[mynaui-bookmark-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.96.96 0 0 0-1.054 0zM10 7.5l4 4m0-4l-4 4"></svg:path>`,
})
export class MynauiBookmarkXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkXSolidIcon],svg[mynaui-bookmark-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zm5.28 3.028a.75.75 0 1 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 10.56l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 9.5l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.44z"></svg:path>`,
})
export class MynauiBookmarkXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBoundingBoxIcon],svg[mynaui-bounding-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17V7m0 10a2 2 0 1 0 2 2m-2-2a2 2 0 0 1 2 2M5 7a2 2 0 0 0 2-2M5 7a2 2 0 1 1 2-2m0 0h10m0 0a2 2 0 0 0 2 2m-2-2a2 2 0 1 1 2 2m0 0v10m0 0a2 2 0 0 0-2 2m2-2a2 2 0 1 1-2 2M7 19h10"></svg:path>`,
})
export class MynauiBoundingBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBoundingBoxSolidIcon],svg[mynaui-bounding-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.25a2.75 2.75 0 0 0-.75 5.396v8.708a2.751 2.751 0 1 0 3.396 3.396h8.708a2.751 2.751 0 1 0 3.396-3.396V7.646a2.751 2.751 0 1 0-3.396-3.396H7.646A2.75 2.75 0 0 0 5 2.25m.75 14.104V7.646A2.76 2.76 0 0 0 7.646 5.75h8.708c.259.916.98 1.637 1.896 1.896v8.708a2.76 2.76 0 0 0-1.896 1.896H7.646a2.76 2.76 0 0 0-1.896-1.896"></svg:path>`,
})
export class MynauiBoundingBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBowlIcon],svg[mynaui-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.017 21c.555 0 1.005-.448 1.005-1v-.45c0-.307.164-.563.433-.715a9 9 0 0 0 1.944-1.471a8.95 8.95 0 0 0 2.595-5.366c.061-.549-.395-.998-.95-.998H3.956c-.555 0-1.011.45-.95.998A8.95 8.95 0 0 0 5.6 17.364a9 9 0 0 0 1.833 1.408c.33.193.55.537.548.918v.307A1.003 1.003 0 0 0 8.986 21zM6 5v2m12-2v2m-6-4v4"></svg:path>`,
})
export class MynauiBowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBowlSolidIcon],svg[mynaui-bowl-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.956 10.25c-.94 0-1.813.778-1.696 1.83a9.7 9.7 0 0 0 2.812 5.816a9.8 9.8 0 0 0 1.984 1.524c.126.073.177.184.176.268v.306a1.753 1.753 0 0 0 1.755 1.756h6.03c.965 0 1.755-.78 1.755-1.75v-.449l.002-.017l.003-.007a.1.1 0 0 1 .047-.038a9.8 9.8 0 0 0 2.104-1.593a9.7 9.7 0 0 0 2.812-5.815c.117-1.053-.756-1.831-1.696-1.831zM6 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 6 4.25m12 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m-6-2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiBowlSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBoxIcon],svg[mynaui-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 21l8.131-4.208c.316-.164.474-.245.589-.366a1 1 0 0 0 .226-.373c.054-.159.054-.336.054-.692V7.533M12 21l-8.131-4.208c-.316-.164-.474-.245-.589-.366a1 1 0 0 1-.226-.373C3 15.894 3 15.716 3 15.359V7.533M12 21v-9.063m9-4.404l-9 4.404m9-4.404l-8.27-4.28c-.267-.138-.4-.208-.541-.235a1 1 0 0 0-.378 0c-.14.027-.274.097-.542.235L3 7.533m0 0l9 4.404"></svg:path>`,
})
export class MynauiBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBoxSolidIcon],svg[mynaui-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.669 2.282c.218-.043.443-.043.662 0c.251.048.479.167.691.277l.053.028l8.27 4.28a.75.75 0 0 1 .405.666v7.898c0 .283.002.583-.093.862a1.8 1.8 0 0 1-.395.652c-.205.214-.473.351-.723.48l-.063.033l-8.131 4.208a.75.75 0 0 1-.69 0l-8.131-4.208l-.063-.033c-.25-.129-.518-.266-.723-.48a1.8 1.8 0 0 1-.395-.652c-.095-.28-.094-.58-.093-.863V7.533a.75.75 0 0 1 .405-.666l8.269-4.28l.053-.027c.213-.111.44-.23.692-.278m.226 1.496a7 7 0 0 0-.282.141L4.668 7.514L12 11.102l7.332-3.588l-6.946-3.595a7 7 0 0 0-.282-.141l-.058-.024m-.796 16.013v-7.362l-7.5-3.67v6.624c0 .187 0 .294.005.375l.009.078a.3.3 0 0 0 .057.095c.005.004.021.017.064.042c.068.042.163.09.328.176zm.645-15.99l.06-.023z"></svg:path>`,
})
export class MynauiBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandChromeIcon],svg[mynaui-brand-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.992 20.946l4.122-7.146M4.755 6.654L8.886 13.8m11.367-5.4H12m0 7.2a3.6 3.6 0 1 0 0-7.2a3.6 3.6 0 0 0 0 7.2"></svg:path><svg:path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g>`,
})
export class MynauiBrandChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandChromeSolidIcon],svg[mynaui-brand-chrome-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.11 6.27a1 1 0 0 1 .089-.12A9.74 9.74 0 0 1 12 2.25a9.75 9.75 0 0 1 8.96 5.899A9.7 9.7 0 0 1 21.75 12A9.75 9.75 0 0 1 12 21.75a10 10 0 0 1-1.146-.067C6.009 21.116 2.25 16.997 2.25 12c0-2.142.69-4.122 1.86-5.73m.616 1.833a8.252 8.252 0 0 0 5.87 12.028l2.226-3.858q-.4.076-.822.077a4.35 4.35 0 0 1-3.858-2.338zm.934-1.382l2.228 3.855A4.35 4.35 0 0 1 12 7.65h7.011A8.24 8.24 0 0 0 12 3.75a8.23 8.23 0 0 0-6.34 2.97m14.084 2.43h-4.458A4.33 4.33 0 0 1 16.35 12a4.33 4.33 0 0 1-.675 2.328l-3.413 5.918A8.25 8.25 0 0 0 19.744 9.15"></svg:path>`,
})
export class MynauiBrandChromeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandCodepenIcon],svg[mynaui-brand-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4l8 5.2M12 4L4 9.2M12 4v5.2m8 0v5.6m0-5.6l-8 5.6m8 0L12 20m8-5.2l-8-5.6M12 20l-8-5.2m8 5.2v-5.2m-8 0V9.2m0 5.6l8-5.6m-8 0l8 5.6"></svg:path>`,
})
export class MynauiBrandCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandCodepenSolidIcon],svg[mynaui-brand-codepen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.305 12l-1.297.868v-1.736zm3.178-2.126V7.456l-4.056 2.711l1.804 1.209zm5.1.293l-4.066-2.71v2.417l2.252 1.502zm-9.156 3.666l4.056 2.71v-2.417l-2.252-1.502zm5.09.293v2.418l4.066-2.711l-1.814-1.209zM12 10.772L10.167 12L12 13.229L13.833 12zM21.75 12c0 5.363-4.387 9.75-9.75 9.75c-5.362 0-9.75-4.387-9.75-9.75c0-5.362 4.388-9.75 9.75-9.75c5.363 0 9.75 4.388 9.75 9.75m-3.724-1.901l-.02-.098c-.01-.01-.01-.02-.02-.039l-.038-.078l-.04-.058l-.029-.03l-.029-.019v-.02l-.039-.019l-.01-.01l-5.508-3.666a.52.52 0 0 0-.576 0L6.2 9.728v.01l-.049.02v.019l-.03.02l-.029.029l-.01.029l-.029.03l-.058.116v.049h-.01l-.01.049V13.9l.01.049h.01v.049c.01.01.01.02.02.039l.038.078l.04.058l.029.03l.029.019v.02l.039.019l.01.01l5.518 3.676a.5.5 0 0 0 .283.078c.098 0 .205-.03.293-.078l5.508-3.676l.01-.01l.039-.02v-.019l.03-.02l.029-.029l.039-.058l.058-.117v-.049h.01l.01-.049zm-1.034 2.769v-1.736L15.695 12z"></svg:path>`,
})
export class MynauiBrandCodepenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandCodesandboxIcon],svg[mynaui-brand-codesandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6H6v12h12z"></svg:path>`,
})
export class MynauiBrandCodesandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandCodesandboxSolidIcon],svg[mynaui-brand-codesandbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 5.25h13.5v13.5H5.25zm1.5 1.5v10.5h10.5V6.75z"></svg:path>`,
})
export class MynauiBrandCodesandboxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandDribbbleIcon],svg[mynaui-brand-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path d="M3.07 10.875c1.7.102 6.2.195 9.08-1.035s5.358-3.492 6.208-4.21"></svg:path><svg:path d="M8.625 3.654c1.409 1.3 4.482 4.61 5.625 7.896s1.566 7.326 1.827 8.476"></svg:path><svg:path d="M21 12c-1.313 0-4.936-.495-8.178.928c-3.522 1.547-6.072 3.946-7.184 5.438"></svg:path></svg:g>`,
})
export class MynauiBrandDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandDribbbleSolidIcon],svg[mynaui-brand-dribbble-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12a10 10 0 0 1 .077-1.234C2.934 5.964 7.033 2.25 12 2.25a9.72 9.72 0 0 1 6.882 2.844l.01.01A9.72 9.72 0 0 1 21.75 12A9.75 9.75 0 0 1 12 21.75A9.75 9.75 0 0 1 2.25 12m4.97-.395c1.725-.12 3.669-.411 5.224-1.075q.231-.1.458-.206c.251.488.469.982.64 1.473l.018.051a11 11 0 0 0-1.04.394c-3.144 1.38-5.55 3.419-6.912 4.974L6.66 18.29c1.202-1.399 3.463-3.357 6.463-4.675a10 10 0 0 1 .875-.334a40 40 0 0 1 .757 3.44c.133.739.241 1.418.333 1.994l.013.081c.046.29.09.56.13.797l1.395-.761l-.057-.356c-.092-.574-.202-1.266-.337-2.02a42 42 0 0 0-.78-3.544c1.757-.328 3.433-.249 4.612-.194l.154.007l-.005-1.506c-1.18-.06-3.134-.154-5.198.254l-.057-.17a13 13 0 0 0-.73-1.676c1.746-1.011 3.211-2.223 4.069-2.957l-1.075-1.056c-.855.727-2.185 1.812-3.738 2.712c-1.087-1.732-2.424-3.28-3.451-4.34L8.47 4.54c1 .975 2.502 2.629 3.68 4.479q-.147.067-.295.13c-1.324.566-3.07.843-4.74.959a32 32 0 0 1-3.16.055l-.198 1.494c.899.032 2.135.04 3.462-.053"></svg:path>`,
})
export class MynauiBrandDribbbleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFacebookIcon],svg[mynaui-brand-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 10v4h3v7h4v-7h3l1-4h-4V8c0-.545.455-1 1-1h3V3h-3c-2.723 0-5 2.277-5 5v2z"></svg:path>`,
})
export class MynauiBrandFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFacebookSolidIcon],svg[mynaui-brand-facebook-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.75c-2.861 0-5.25 2.389-5.25 5.25v1.75H6.5a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h2.75V21c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25v-6.75h2.75a.25.25 0 0 0 .242-.19l1-4a.25.25 0 0 0-.242-.31h-3.75V8a.76.76 0 0 1 .75-.75h3a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25z"></svg:path>`,
})
export class MynauiBrandFacebookSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFigmaIcon],svg[mynaui-brand-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m0 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0"></svg:path><svg:path d="M12 12a3.001 3.001 0 0 1 5.121-2.121A3.001 3.001 0 1 1 12.001 12"></svg:path><svg:path d="M12 3h3a3 3 0 0 1 0 6h-3zM6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"></svg:path></svg:g>`,
})
export class MynauiBrandFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFigmaSolidIcon],svg[mynaui-brand-figma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3.75v4.5H15a2.25 2.25 0 0 0 0-4.5zM17.25 9a3.76 3.76 0 0 1 1.215 1.565A3.751 3.751 0 0 1 12.75 15v3a3.75 3.75 0 1 1-6-3a3.76 3.76 0 0 1-1.5-3a3.75 3.75 0 0 1 1.5-3A3.75 3.75 0 0 1 9 2.25h6A3.75 3.75 0 0 1 17.25 9m-6 .75H9a2.25 2.25 0 1 0 0 4.5h2.25z"></svg:path>`,
})
export class MynauiBrandFigmaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFramerIcon],svg[mynaui-brand-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.6V21l-6.5-5.4zM5.5 3l13 12.6h-13V9.3h13V3z"></svg:path>`,
})
export class MynauiBrandFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandFramerSolidIcon],svg[mynaui-brand-framer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2.25a.75.75 0 0 0-.522 1.289l5.17 5.011H5.5a.75.75 0 0 0-.75.75v6.3c0 .235.108.445.278.583l6.493 5.394A.75.75 0 0 0 12.75 21v-4.65h5.75a.75.75 0 0 0 .522-1.289l-5.17-5.011H18.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiBrandFramerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGithubIcon],svg[mynaui-brand-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 15.668q.675.081 1 .618c.326.537 1.537 2.526 2.913 2.526H9.5m5.672-3.513q.823 1.078.823 1.936V21m-5.625-5.609q-.87.954-.869 1.813V21"></svg:path><svg:path d="M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316c1.448-1.084 2.188-2.758 2.188-4.411c0-1.16-.44-2.243-1.204-3.16c-.425-.511.819-3.872-.286-3.359c-1.105.514-2.725 1.198-3.574.947c-.909-.268-1.9-.416-2.936-.416c-.9 0-1.766.111-2.574.317c-1.174.298-2.296-.363-3.426-.848c-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41c.965.722 2.174 1.183 3.527 1.41"></svg:path></svg:g>`,
})
export class MynauiBrandGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGithubSolidIcon],svg[mynaui-brand-github-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.955 6.033a3 3 0 0 1 .019-.356c.024-.23.062-.472.103-.736q.037-.23.074-.487c.056-.397.119-.907.048-1.298c-.033-.185-.132-.554-.49-.77c-.39-.234-.789-.118-1.015-.013c-.546.254-1.191.536-1.791.725c-.3.094-.571.16-.8.188c-.238.03-.382.016-.454-.005c-.98-.29-2.041-.447-3.149-.447c-.962 0-1.89.119-2.758.34c-.394.1-.811.05-1.31-.115a11 11 0 0 1-1.054-.436q-.271-.125-.582-.26c-.285-.121-.65-.168-1.001.022c-.314.17-.472.457-.553.662c-.161.402-.2.929-.214 1.355c-.008.255-.008.56-.009.83c0 .172 0 .33-.002.452q-.005.273-.023.409v.005c-.78 1-1.244 2.188-1.244 3.474c0 1.917 1.03 3.803 2.644 5.011c.789.59 1.71 1.015 2.709 1.294a2.8 2.8 0 0 0-.352 1.327v.858H7.413c-.347 0-.801-.275-1.296-.817c-.462-.506-.814-1.082-.976-1.348c-.347-.572-.894-.894-1.55-.974a.75.75 0 1 0-.182 1.49c.243.029.363.12.45.263l.002.004c.166.272.581.956 1.148 1.576c.535.587 1.375 1.306 2.404 1.306H8.75L8.751 21c0 .414.336.75.75.75h6.497a.75.75 0 0 0 .748-.75v-3.765c0-.492-.142-.983-.388-1.468c.886-.275 1.708-.663 2.404-1.184c1.65-1.235 2.488-3.139 2.488-5.011c0-1.315-.485-2.527-1.295-3.54"></svg:path>`,
})
export class MynauiBrandGithubSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGitlabIcon],svg[mynaui-brand-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.981 21L21 13.708L18.498 3l-3.015 6.497H8.997L5.507 3L3 13.708z"></svg:path>`,
})
export class MynauiBrandGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGitlabSolidIcon],svg[mynaui-brand-gitlab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.168 2.645a.75.75 0 0 0-1.39.184L2.27 13.537a.75.75 0 0 0 .257.753l8.982 7.292a.75.75 0 0 0 .944.001l9.019-7.292a.75.75 0 0 0 .258-.754L19.228 2.829a.75.75 0 0 0-1.41-.145l-2.814 6.063H9.445z"></svg:path>`,
})
export class MynauiBrandGitlabSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGoogleIcon],svg[mynaui-brand-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.839 10.38h-8.656v3.33h5.065c-.092.81-.645 2.07-1.842 2.88c-.737.54-1.842.9-3.223.9c-3.079 0-5.525-2.572-5.525-5.58c0-2.923 2.585-5.49 5.525-5.49c1.75 0 2.855.72 3.591 1.35l2.579-2.52C16.787 3.9 14.669 3 12.183 3C8.592 3 5.461 4.98 3.987 7.95a8.8 8.8 0 0 0 0 8.1C5.461 19.02 8.592 21 12.183 21c2.486 0 4.604-.81 6.078-2.16c2.4-2.1 3.095-5.427 2.578-8.46"></svg:path>`,
})
export class MynauiBrandGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandGoogleSolidIcon],svg[mynaui-brand-google-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.183 2.75c-3.683 0-6.902 2.031-8.419 5.088a9.05 9.05 0 0 0 0 8.325c1.517 3.056 4.736 5.087 8.419 5.087c2.54 0 4.72-.827 6.244-2.224c2.484-2.173 3.185-5.599 2.658-8.688a.25.25 0 0 0-.246-.208h-8.656a.25.25 0 0 0-.25.25v3.33c0 .138.112.25.25.25h4.768c-.166.74-.687 1.747-1.685 2.423l-.008.005c-.685.502-1.735.852-3.075.852c-2.936 0-5.275-2.455-5.275-5.33c0-2.783 2.472-5.24 5.275-5.24c1.67 0 2.72.683 3.429 1.29a.25.25 0 0 0 .337-.011l2.578-2.52a.25.25 0 0 0-.011-.368c-1.609-1.388-3.784-2.311-6.333-2.311"></svg:path>`,
})
export class MynauiBrandGoogleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandInstagramIcon],svg[mynaui-brand-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5"></svg:path><svg:path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026a3.5 3.5 0 0 1 6.925-1.026"></svg:path></svg:g>`,
})
export class MynauiBrandInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandInstagramSolidIcon],svg[mynaui-brand-instagram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM16.25 6.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H17a.75.75 0 0 1-.75-.75m-6.207 1.728a4.25 4.25 0 1 1 3.914 7.544a4.25 4.25 0 0 1-3.914-7.544"></svg:path>`,
})
export class MynauiBrandInstagramSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandLinkedinIcon],svg[mynaui-brand-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5"></svg:path><svg:path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2c1.6 0 1.6 1.375 1.6 2.875v2"></svg:path></svg:g>`,
})
export class MynauiBrandLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandLinkedinSolidIcon],svg[mynaui-brand-linkedin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.75 7.625a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.125a.75.75 0 0 0-1.5 0v5.625a.75.75 0 0 0 1.5 0zM12 10a.75.75 0 0 0-.75.75v5.625a.75.75 0 0 0 1.5 0V13.5c0-.377.168-.665.458-.883c.306-.229.743-.367 1.192-.367c.293 0 .435.062.505.11c.066.044.133.12.193.28c.141.374.152.935.152 1.735v2a.75.75 0 0 0 1.5 0v-2.08c0-.686 0-1.523-.248-2.184a2.03 2.03 0 0 0-.756-.994c-.381-.258-.84-.367-1.346-.367c-.56 0-1.14.129-1.65.392v-.392A.75.75 0 0 0 12 10"></svg:path>`,
})
export class MynauiBrandLinkedinSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandPinterestIcon],svg[mynaui-brand-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M7.452 13.18c-1.108-2.262.4-6.668 5.472-5.948c5.586.794 4.581 9.478-.077 9.138c-1.474-.107-2.031-1.328-2.177-2.576m0 0c-.11-.946.016-1.907.16-2.41c.244-.857.649-.74.353.393c-.144.552-.32 1.245-.513 2.017m0 0c-.514 2.06-1.15 4.685-1.63 6.708"></svg:path></svg:g>`,
})
export class MynauiBrandPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandPinterestSolidIcon],svg[mynaui-brand-pinterest-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m4.999-3.331c1.049-1.557 2.99-2.576 5.78-2.18c1.608.23 2.78 1.039 3.517 2.135c.726 1.08 1.006 2.398.93 3.647c-.076 1.247-.51 2.489-1.295 3.412c-.8.94-1.96 1.54-3.388 1.435c-.84-.06-1.483-.41-1.943-.923c-.375 1.53-.762 3.138-1.08 4.48a.75.75 0 1 1-1.46-.347a645 645 0 0 1 1.6-6.587c-.095-1.002.037-1.995.198-2.562a2.2 2.2 0 0 1 .317-.7c.068-.09.186-.227.368-.318a.83.83 0 0 1 .834.05c.237.16.325.391.36.51c.039.137.05.275.05.395c0 .243-.045.53-.129.85c-.134.516-.297 1.157-.476 1.872c.073.5.218.929.437 1.234c.217.301.526.514 1.033.55c.9.066 1.612-.293 2.136-.91c.54-.635.88-1.55.94-2.531c.06-.979-.165-1.959-.677-2.72c-.5-.745-1.297-1.318-2.483-1.486c-2.281-.324-3.63.5-4.326 1.532c-.736 1.092-.792 2.474-.367 3.342a.75.75 0 0 1-1.346.66c-.683-1.393-.54-3.344.47-4.84"></svg:path>`,
})
export class MynauiBrandPinterestSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandPocketIcon],svg[mynaui-brand-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9 10.25l3 3l3-3"></svg:path><svg:path d="M4.8 3h14.4c.477 0 .935.199 1.273.553S21 4.388 21 4.89v6.667c0 2.504-.948 4.907-2.636 6.678S14.387 21 12 21a8.6 8.6 0 0 1-3.444-.719a9 9 0 0 1-2.92-2.047C3.948 16.463 3 14.06 3 11.556V4.889c0-.501.19-.982.527-1.336A1.76 1.76 0 0 1 4.8 3"></svg:path></svg:g>`,
})
export class MynauiBrandPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandPocketSolidIcon],svg[mynaui-brand-pocket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.984 3.036A2.5 2.5 0 0 1 4.8 2.25h14.4c.688 0 1.34.287 1.816.786c.474.497.734 1.164.734 1.853v6.667c0 2.692-1.019 5.28-2.843 7.195c-1.826 1.916-4.31 2.999-6.907 2.999a9.4 9.4 0 0 1-3.743-.781a9.7 9.7 0 0 1-3.164-2.218C3.27 16.837 2.25 14.248 2.25 11.556V4.889c0-.689.26-1.356.734-1.853M9.53 9.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L12 12.19z"></svg:path>`,
})
export class MynauiBrandPocketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandSlackIcon],svg[mynaui-brand-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.44 18.12v1.44c0 .81.63 1.44 1.44 1.44s1.44-.63 1.44-1.44s-.63-1.44-1.44-1.44zm7.56-3.6c0-.9-.72-1.71-1.71-1.71h-4.14c-.9 0-1.71.72-1.71 1.71c0 .9.72 1.71 1.71 1.71h4.14c.9 0 1.71-.81 1.71-1.71M6.06 13.26H4.62c-.81 0-1.44.63-1.44 1.44s.63 1.44 1.44 1.44s1.44-.63 1.44-1.44zm3.6 7.56c.9 0 1.71-.72 1.71-1.71v-4.14c0-.9-.72-1.71-1.71-1.71c-.9 0-1.71.72-1.71 1.71v4.14c.09.9.81 1.71 1.71 1.71m.9-16.38c0-.81-.63-1.44-1.44-1.44s-1.44.63-1.44 1.44s.63 1.44 1.44 1.44h1.44zM3 9.48c0 .9.72 1.71 1.71 1.71h4.14c.9 0 1.71-.72 1.71-1.71c0-.9-.72-1.71-1.71-1.71H4.71C3.72 7.86 3 8.58 3 9.48m14.94 1.26h1.44c.81 0 1.44-.63 1.44-1.44s-.63-1.44-1.44-1.44s-1.44.63-1.44 1.44zm-3.69-7.47c-.9 0-1.71.72-1.71 1.71v4.14c0 .9.72 1.71 1.71 1.71c.9 0 1.71-.72 1.71-1.71V4.89c0-.9-.72-1.62-1.71-1.62"></svg:path>`,
})
export class MynauiBrandSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandSlackSolidIcon],svg[mynaui-brand-slack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 2.52c-1.288 0-2.46 1.03-2.46 2.46v4.14c0 1.288 1.03 2.46 2.46 2.46c1.288 0 2.46-1.03 2.46-2.46V4.89c0-1.34-1.083-2.37-2.46-2.37m5.13 4.59c-1.224 0-2.19.966-2.19 2.19v1.44c0 .414.336.75.75.75h1.44c1.224 0 2.19-.966 2.19-2.19s-.966-2.19-2.19-2.19M4.71 7.02l-.068.003c-1.314.12-2.392 1.11-2.392 2.457c0 1.288 1.03 2.46 2.46 2.46h4.14c1.288 0 2.46-1.03 2.46-2.46c0-1.288-1.03-2.46-2.46-2.46zm4.41-4.77c-1.224 0-2.19.966-2.19 2.19s.966 2.19 2.19 2.19h1.44a.75.75 0 0 0 .75-.75V4.44c0-1.224-.966-2.19-2.19-2.19m.54 10.26c-1.288 0-2.46 1.03-2.46 2.46v4.14q0 .038.004.075c.119 1.188 1.082 2.385 2.456 2.385c1.288 0 2.46-1.03 2.46-2.46v-4.14c0-1.288-1.03-2.46-2.46-2.46m-5.04 0c-1.224 0-2.19.966-2.19 2.19s.966 2.19 2.19 2.19s2.19-.966 2.19-2.19v-1.44a.75.75 0 0 0-.75-.75zm10.53-.45c-1.288 0-2.46 1.03-2.46 2.46c0 1.288 1.03 2.46 2.46 2.46h4.14c1.314 0 2.46-1.146 2.46-2.46c0-1.288-1.03-2.46-2.46-2.46zm-1.71 5.31a.75.75 0 0 0-.75.75v1.44c0 1.224.966 2.19 2.19 2.19s2.19-.966 2.19-2.19s-.966-2.19-2.19-2.19z"></svg:path>`,
})
export class MynauiBrandSlackSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandSpotifyIcon],svg[mynaui-brand-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.72 15.384c2.018-.8 4.239-.5 6.055.7m-6.963-3.7c2.725-1 5.752-.7 8.073 1M6.5 9.284c3.633-1.4 7.77-.9 11 1.3"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiBrandSpotifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandSpotifySolidIcon],svg[mynaui-brand-spotify-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m4.52-2.016c3.4-1.31 7.279-.844 10.308 1.22a.75.75 0 0 0 .844-1.24c-3.43-2.336-7.825-2.87-11.692-1.38a.75.75 0 1 0 .54 1.4m1.3 3.104c2.515-.923 5.275-.635 7.372.901a.75.75 0 0 0 .886-1.21c-2.544-1.864-5.84-2.176-8.775-1.1a.75.75 0 0 0 .517 1.41m6.292 3.622a.75.75 0 0 0 .826-1.252c-2.004-1.324-4.48-1.668-6.744-.771a.75.75 0 1 0 .552 1.394c1.773-.702 3.737-.447 5.366.629"></svg:path>`,
})
export class MynauiBrandSpotifySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTelegramIcon],svg[mynaui-brand-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 5L4.672 11.373c-.395.164-.592.247-.643.354a.3.3 0 0 0 .016.29c.063.1.268.16.68.281L10.5 14M20 5l-2.065 13.049c-.04.254-.06.381-.127.45a.3.3 0 0 1-.223.097c-.097 0-.205-.072-.421-.216l-2.93-1.956M20 5l-9.5 9m0 0l.156 4.3c0 .334 0 .501.069.585c.06.074.15.116.246.115c.11-.001.24-.108.5-.32l2.764-2.256M10.5 14l3.735 2.424"></svg:path>`,
})
export class MynauiBrandTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTelegramSolidIcon],svg[mynaui-brand-telegram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.464 4.41a.75.75 0 0 1 .277.707l-2.065 13.049l-.003.02a4 4 0 0 1-.064.343a1.1 1.1 0 0 1-.26.49a1.06 1.06 0 0 1-.758.327a1.1 1.1 0 0 1-.53-.145a4 4 0 0 1-.296-.186l-.018-.011l-2.467-1.649l-2.353 1.921a5 5 0 0 1-.342.264a1.1 1.1 0 0 1-.605.21a1.06 1.06 0 0 1-.836-.39a1.1 1.1 0 0 1-.227-.605a5 5 0 0 1-.011-.43v-.01l-.136-3.748l-5.256-1.55l-.026-.007a7 7 0 0 1-.504-.16c-.11-.043-.402-.156-.577-.44a1.05 1.05 0 0 1-.056-1.003c.143-.303.42-.447.525-.501c.134-.07.308-.142.483-.215l15.353-6.384a.75.75 0 0 1 .752.104M10.298 13.16l5.23-4.903l-9.892 3.529zm7.617-5.097l-6.208 5.827l2.944 1.91l2.605 1.741z"></svg:path>`,
})
export class MynauiBrandTelegramSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandThreadsIcon],svg[mynaui-brand-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.77 8.515c2.23-1.812 5.444-.845 5.823 2.135c.403 3.163-.4 5.67-3.52 5.67c-2.895 0-2.806-2.52-2.806-2.52c0-2.7 4.589-3.06 7.262-1.71c4.9 3.15 1.336 8.91-4.01 8.91C8.09 21 4.5 18.75 4.5 12s3.59-9 8.02-9c3.125 0 5.944 1.626 6.98 4.879"></svg:path>`,
})
export class MynauiBrandThreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandThreadsSolidIcon],svg[mynaui-brand-threads-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 12c0-3.247.861-5.272 2.12-6.493c1.265-1.225 3.052-1.757 5.15-1.757c2.856 0 5.345 1.467 6.265 4.356a.75.75 0 0 0 1.43-.455c-1.152-3.615-4.301-5.401-7.696-5.401c-2.332 0-4.554.593-6.192 2.18C4.684 6.022 3.75 8.497 3.75 12s.934 5.978 2.577 7.57c1.638 1.587 3.86 2.18 6.192 2.18c2.932 0 5.429-1.577 6.514-3.68c.547-1.06.74-2.269.411-3.459c-.33-1.192-1.16-2.284-2.51-3.152l-.067-.038a7 7 0 0 0-.463-.212q-.025-.326-.067-.654c-.225-1.77-1.314-2.998-2.718-3.48c-1.386-.475-3.016-.203-4.322.858a.75.75 0 1 0 .945 1.164c.926-.751 2.018-.902 2.89-.603c.856.294 1.563 1.04 1.717 2.25v.002c-1.033-.203-2.118-.227-3.083-.059c-.82.144-1.614.437-2.22.94c-.625.52-1.027 1.25-1.03 2.164v.004a2 2 0 0 0 .004.148a3.5 3.5 0 0 0 .405 1.473c.223.416.573.84 1.106 1.156s1.207.498 2.043.498c1.8 0 3.056-.749 3.743-2.049c.328-.62.511-1.34.584-2.111c.918.66 1.403 1.396 1.597 2.1c.215.777.101 1.598-.298 2.372c-.808 1.565-2.766 2.868-5.18 2.868c-2.098 0-3.885-.532-5.15-1.757c-1.259-1.22-2.12-3.246-2.12-6.493m6.774.165c.905-.158 1.958-.103 2.912.137c-.023.817-.171 1.5-.445 2.018c-.394.745-1.098 1.25-2.417 1.25c-.613 0-1.014-.132-1.278-.29a1.46 1.46 0 0 1-.551-.576a2 2 0 0 1-.227-.83l-.001-.074c0-.432.171-.756.488-1.02c.339-.28.858-.5 1.52-.615"></svg:path>`,
})
export class MynauiBrandThreadsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTrelloIcon],svg[mynaui-brand-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M17 7h-3v5h3zm-7 0H7v9h3z"></svg:path></svg:g>`,
})
export class MynauiBrandTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTrelloSolidIcon],svg[mynaui-brand-trello-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.25 7v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75m7 0v5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiBrandTrelloSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTwitchIcon],svg[mynaui-brand-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.556 11.1V7.5M20 3H4v14.4h4.444V21L12 17.4h4.444L20 13.8zm-8.889 8.1V7.5z"></svg:path>`,
})
export class MynauiBrandTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTwitchSolidIcon],svg[mynaui-brand-twitch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 .75.75v10.8a.75.75 0 0 1-.216.527l-3.556 3.6a.75.75 0 0 1-.534.223h-4.13l-3.336 3.377A.75.75 0 0 1 7.694 21v-2.85H4a.75.75 0 0 1-.75-.75zm8.611 4.5a.75.75 0 0 0-1.5 0v3.6a.75.75 0 0 0 1.5 0zm3.695-.75a.75.75 0 0 0-.75.75v3.6a.75.75 0 1 0 1.5 0V7.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiBrandTwitchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTwitterIcon],svg[mynaui-brand-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4.85c-.9.443-1.782.623-2.7.896c-1.009-1.145-2.505-1.208-3.942-.667C12.427 5.806 12 7.529 12 9.364c-2.92.075-5.521-1.262-7.2-3.618c0 0-3.764 6.723 3.6 9.95c-1.685 1.127-3.365 1.888-5.4 1.808c2.977 1.631 6.222 2.192 9.03 1.372c4.63-1.351 7.36-5.722 7.334-10.397c0-.225 1.359-2.506 1.636-3.629"></svg:path>`,
})
export class MynauiBrandTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandTwitterSolidIcon],svg[mynaui-brand-twitter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.517 4.903c-1.271-1.12-2.966-1.074-4.423-.526c-1.155.435-1.891 1.19-2.32 2.113c-.306.661-.446 1.389-.498 2.112C8.9 8.459 6.811 7.276 5.411 5.31a.75.75 0 0 0-.652-.313c-.307.016-.532.22-.666.481q-.046.088-.12.246a10 10 0 0 0-.354.875c-.255.73-.519 1.756-.53 2.904c-.012 1.154.233 2.446 1.007 3.676c.599.95 1.494 1.832 2.769 2.578c-1.227.672-2.447 1.052-3.836.998a.75.75 0 0 0-.39 1.407c3.105 1.7 6.555 2.323 9.602 1.435c4.96-1.449 7.853-6.09 7.873-11.001q.044-.1.137-.285q.105-.211.238-.467q.12-.23.258-.504c.364-.719.818-1.65.981-2.31a.75.75 0 0 0-1.06-.853c-.612.302-1.193.462-1.859.645z"></svg:path>`,
})
export class MynauiBrandTwitterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandXIcon],svg[mynaui-brand-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 4l-5.93 6.93M5 20l5.93-6.93m0 0l5.795 6.587c.19.216.483.343.794.343h1.474c.836 0 1.307-.85.793-1.435L13.07 10.93m-2.14 2.14L4.214 5.435C3.7 4.85 4.17 4 5.007 4h1.474c.31 0 .604.127.794.343l5.795 6.587"></svg:path>`,
})
export class MynauiBrandXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandXSolidIcon],svg[mynaui-brand-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.57 4.488a.75.75 0 0 0-1.14-.976l-5.368 6.274l-5.224-5.938a1.8 1.8 0 0 0-1.357-.598H5.007c-.68 0-1.264.352-1.56.885a1.55 1.55 0 0 0 .204 1.795l6.286 7.147l-5.507 6.435a.75.75 0 1 0 1.14.976l5.368-6.274l5.224 5.938c.345.392.85.598 1.357.598h1.474c.681 0 1.264-.352 1.56-.885a1.55 1.55 0 0 0-.203-1.795l-6.287-7.146z"></svg:path>`,
})
export class MynauiBrandXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandYoutubeIcon],svg[mynaui-brand-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12c0-3.3 0-4.95 1.464-5.975C4.93 5 7.286 5 12 5s7.071 0 8.535 1.025S22 8.7 22 12s0 4.95-1.465 5.975C19.072 19 16.714 19 12 19s-7.071 0-8.536-1.025S2 15.3 2 12"></svg:path><svg:path d="M10.5 9.908v4.184a.41.41 0 0 0 .412.408a.4.4 0 0 0 .228-.068l3.175-2.074a.405.405 0 0 0 .003-.678l-3.175-2.11a.415.415 0 0 0-.573.11a.4.4 0 0 0-.07.228"></svg:path></svg:g>`,
})
export class MynauiBrandYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandYoutubeSolidIcon],svg[mynaui-brand-youtube-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.443 4.381C7.84 4.25 9.637 4.25 11.96 4.25h.082c2.322 0 4.119 0 5.516.131c1.407.133 2.517.406 3.409 1.03c.928.65 1.377 1.511 1.587 2.607c.197 1.024.197 2.321.197 3.907v.15c0 1.586 0 2.883-.197 3.907c-.21 1.096-.659 1.957-1.587 2.607c-.892.624-2.002.897-3.41 1.03c-1.396.131-3.193.131-5.515.131h-.082c-2.322 0-4.119 0-5.516-.131c-1.407-.133-2.517-.406-3.409-1.03c-.928-.65-1.377-1.511-1.587-2.607c-.197-1.024-.197-2.321-.197-3.907v-.15c0-1.586 0-2.883.197-3.907c.21-1.096.659-1.957 1.587-2.607c.892-.624 2.002-.897 3.41-1.03m5.115 4.564a1.166 1.166 0 0 0-1.608.313c-.13.191-.2.418-.2.65v4.184a1.16 1.16 0 0 0 1.8.968l3.175-2.074a1.155 1.155 0 0 0 .008-1.931z"></svg:path>`,
})
export class MynauiBrandYoutubeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBriefcaseIcon],svg[mynaui-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.308 21h7.384c3.71 0 4.375-1.45 4.569-3.213l.692-7.2c.25-2.196-.397-3.987-4.338-3.987h-9.23c-3.941 0-4.587 1.791-4.338 3.987l.692 7.2C3.933 19.55 4.598 21 8.308 21m0-14.4v-.72c0-1.593 0-2.88 2.954-2.88h1.476c2.954 0 2.954 1.287 2.954 2.88v.72"></svg:path><svg:path d="M9.812 13.331A15.26 15.26 0 0 1 3.234 11m11 2.331A15.26 15.26 0 0 0 20.812 11M14 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class MynauiBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBriefcaseSolidIcon],svg[mynaui-briefcase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.3 7.35h-.915c-1.888 0-2.761.433-3.173.91c-.408.473-.534 1.188-.424 2.203a14.5 14.5 0 0 0 5.639 2.064a2.75 2.75 0 0 1 5.148.006c1.966-.274 3.89-.96 5.634-2.04c.116-1.03-.01-1.755-.421-2.233c-.412-.477-1.285-.91-3.173-.91zm-6 3.315c-.13-1.158-.054-2.422.777-3.385c.834-.968 2.254-1.43 4.308-1.43h.173c0-.378 0-.798.053-1.192c.055-.41.174-.853.454-1.25c.589-.83 1.655-1.158 3.197-1.158h1.476c1.542 0 2.608.329 3.197 1.159c.28.396.4.838.454 1.25c.053.393.053.813.053 1.191h.173c2.054 0 3.474.462 4.308 1.43c.831.963.907 2.227.776 3.385l-.693 7.204c-.102.933-.344 1.973-1.212 2.746c-.856.763-2.174 1.135-4.102 1.135H8.308c-1.929 0-3.246-.372-4.102-1.135c-.868-.773-1.11-1.812-1.212-2.746l-.002-.01zM14.943 5.85c0-.396-.002-.714-.04-.993c-.037-.278-.103-.456-.191-.58c-.15-.212-.56-.527-1.973-.527h-1.476c-1.412 0-1.823.315-1.973.526c-.088.125-.154.303-.191.581c-.038.28-.04.597-.04.993zM12 12.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path>`,
})
export class MynauiBriefcaseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrightnessHighIcon],svg[mynaui-brightness-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h3M5 5l2.121 2.121M19 5l-2.121 2.121M5 19l2.121-2.121M19 19l-2.121-2.121M12 3v3m0 15v-3m6-6h3m-6 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class MynauiBrightnessHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrightnessHighSolidIcon],svg[mynaui-brightness-high-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m2.22-7.53a.75.75 0 0 1 1.06 0l2.122 2.12a.75.75 0 0 1-1.061 1.06L4.47 5.532a.75.75 0 0 1 0-1.061m15.06-.001a.75.75 0 0 1 0 1.06l-2.12 2.122a.75.75 0 0 1-1.06-1.061l2.12-2.121a.75.75 0 0 1 1.061 0M7.652 16.348a.75.75 0 0 1 0 1.061L5.53 19.53a.75.75 0 0 1-1.06-1.06l2.121-2.122a.75.75 0 0 1 1.06 0m8.697 0a.75.75 0 0 1 1.061 0l2.121 2.122a.75.75 0 1 1-1.06 1.06l-2.122-2.121a.75.75 0 0 1 0-1.06M12 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 15a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M17.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path>`,
})
export class MynauiBrightnessHighSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrightnessLowIcon],svg[mynaui-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0M3 12h1m1-7l.707.707M19 5l-.707.707M5 19l.707-.707M19 19l-.707-.707M12 3v1m0 17v-1m8-8h1"></svg:path>`,
})
export class MynauiBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBrightnessLowSolidIcon],svg[mynaui-brightness-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m2.22-7.53a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 0 1-1.06 1.06L4.47 5.53a.75.75 0 0 1 0-1.06m15.06 0a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0M6.237 17.763a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0m11.526 0a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 1 1-1.06 1.06l-.707-.707a.75.75 0 0 1 0-1.06M12 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 17a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M19.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path>`,
})
export class MynauiBrightnessLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBuildingIcon],svg[mynaui-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.7 2c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359c.327.665.327 1.536.327 3.279v10.044c0 1.743 0 2.614-.327 3.28a3.06 3.06 0 0 1-1.311 1.359C17.22 22 16.38 22 14.7 22H9.3c-1.68 0-2.52 0-3.162-.34a3.06 3.06 0 0 1-1.311-1.359c-.327-.665-.327-1.536-.327-3.279V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 6.138 2.34C6.78 2 7.62 2 9.3 2z"></svg:path><svg:path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21M10 6H8m2 4H8m8-4h-2m2 4h-2"></svg:path></svg:g>`,
})
export class MynauiBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBuildingOneIcon],svg[mynaui-building-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 22h19.5M4 22V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 5.638 2.34C6.28 2 7.12 2 8.8 2h.4c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359C14 4.364 14 5.235 14 6.978V22M10 6H8m2 4H8m2 4H8m11.8 8V11.444c0-2.305-.798-3.148-2.925-3.148H14"></svg:path>`,
})
export class MynauiBuildingOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBuildingOneSolidIcon],svg[mynaui-building-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.233 1.25c.812 0 1.469 0 2 .045c.55.047 1.033.145 1.48.381a3.8 3.8 0 0 1 1.633 1.692c.223.454.316.944.36 1.507c.044.549.044 1.227.044 2.072v.599h2.125c1.135 0 2.13.22 2.809.948c.666.714.866 1.747.866 2.95v9.806h1.2a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5h1V6.947c0-.845 0-1.523.043-2.072c.045-.563.138-1.053.36-1.507a3.8 3.8 0 0 1 1.635-1.692c.446-.236.93-.334 1.478-.38c.532-.046 1.189-.046 2-.046zM8 5.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM7.25 10c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75M8 13.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiBuildingOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiBuildingSolidIcon],svg[mynaui-building-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.733 1.25H9.267c-.812 0-1.469 0-2 .045c-.55.047-1.033.145-1.48.381a3.8 3.8 0 0 0-1.633 1.692c-.223.454-.316.944-.36 1.507c-.044.549-.044 1.227-.044 2.072v10.106c0 .845 0 1.523.043 2.072c.045.563.138 1.053.36 1.507a3.8 3.8 0 0 0 1.635 1.692c.446.236.93.334 1.478.38c.415.036.904.044 1.484.046V15.5a2.75 2.75 0 0 1 2.75-2.75h1a2.75 2.75 0 0 1 2.75 2.75v7.25a19 19 0 0 0 1.484-.045c.549-.047 1.032-.145 1.478-.381a3.8 3.8 0 0 0 1.634-1.692c.223-.454.316-.944.36-1.508c.044-.548.044-1.226.044-2.07V6.947c0-.845 0-1.523-.043-2.072c-.044-.563-.138-1.053-.36-1.507a3.8 3.8 0 0 0-1.635-1.692c-.446-.236-.93-.334-1.478-.38c-.532-.046-1.189-.046-2-.046M7.25 6A.75.75 0 0 1 8 5.25h2a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6M8 9.25h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5M13.25 6a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M14 9.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M13.75 22.75V15.5c0-.69-.56-1.25-1.25-1.25h-1c-.69 0-1.25.56-1.25 1.25v7.25z"></svg:path></svg:g>`,
})
export class MynauiBuildingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCakeIcon],svg[mynaui-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 11c1.162 3.722 4.667 4.269 6 0m-6 0c-1.053 3.373-3.462 3.74-5 1.91M15 11c.934 2.992 3.383 3.933 5 1.967"></svg:path><svg:path d="M20 21v-8c0-1.09-.91-2-2-2H6c-1.09 0-2 .91-2 2v8m-2 0h20M7 7v4m5-4v4m5-4v4M7 4v.5m5-.5v.5m5-.5v.5"></svg:path></svg:g>`,
})
export class MynauiCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCakeSolidIcon],svg[mynaui-cake-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 7 3.25m5 0a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m5 0a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-10 3a.75.75 0 0 1 .75.75v3.25h3.5V7a.75.75 0 0 1 1.5 0v3.25h3.5V7a.75.75 0 0 1 1.5 0v3.25H18a2.77 2.77 0 0 1 2.75 2.73v7.27H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.25V13a3 3 0 0 1 .007-.191A2.77 2.77 0 0 1 6 10.25h.25V7A.75.75 0 0 1 7 6.25m-1 5.5c-.56 0-1.052.396-1.203.917c.568.549 1.167.675 1.665.522c.453-.14.989-.559 1.434-1.439zm10.12 0c.408.758.922 1.209 1.397 1.394c.525.205 1.126.135 1.699-.428A1.275 1.275 0 0 0 18 11.75zm-2.222 0h-3.78c.546 1.016 1.276 1.464 1.86 1.498c.558.032 1.32-.307 1.92-1.498"></svg:path>`,
})
export class MynauiCakeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarIcon],svg[mynaui-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5V3m-9 2V3M3.25 8h17.5M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path>`,
})
export class MynauiCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarCheckIcon],svg[mynaui-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 5V3m-9 2V3M3.25 8h17.5m-10.492 6.242l1.034 1.181c.095.109.266.1.35-.016l2.1-2.907"></svg:path><svg:path d="M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path></svg:g>`,
})
export class MynauiCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarCheckSolidIcon],svg[mynaui-calendar-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3a.75.75 0 0 0-1.5 0v.301l-.035.003c-.71.054-1.309.169-1.856.432a4.65 4.65 0 0 0-2.083 1.97c-.287.532-.41 1.113-.469 1.793c-.057.662-.057 1.482-.057 2.51v4.981c0 1.029 0 1.85.057 2.511c.06.68.182 1.261.469 1.792a4.65 4.65 0 0 0 2.083 1.971c.547.263 1.146.378 1.856.432c.696.054 1.56.054 2.654.054h5.262c1.094 0 1.958 0 2.654-.054c.71-.055 1.309-.169 1.856-.432a4.65 4.65 0 0 0 2.083-1.97c.287-.532.41-1.113.469-1.793c.057-.662.057-1.482.057-2.51V10.01c0-1.029 0-1.85-.057-2.511c-.06-.68-.182-1.261-.469-1.792a4.65 4.65 0 0 0-2.083-1.971c-.547-.263-1.146-.378-1.856-.432L17.25 3.3V3a.75.75 0 0 0-1.5 0v.253q-.515-.004-1.119-.003H9.37q-.604 0-1.119.003zM5.51 5.088c.294-.142.663-.232 1.24-.282V5a.75.75 0 0 0 1.5 0v-.247A151 151 0 0 1 9.4 4.75h5.2q.639 0 1.15.003V5a.75.75 0 0 0 1.5 0v-.194c.577.05.946.14 1.24.282a3.15 3.15 0 0 1 1.414 1.33c.114.212.196.466.25.832H3.846c.055-.366.137-.62.251-.831A3.15 3.15 0 0 1 5.51 5.088m8.671 6.804a.75.75 0 0 1 .169 1.047l-2.1 2.907a.974.974 0 0 1-1.522.071l-1.034-1.181a.75.75 0 1 1 1.129-.988l.598.684l1.713-2.371a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiCalendarCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarDownIcon],svg[mynaui-calendar-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 5V3m-9 2V3M3.25 8h17.5m-8.747 3.5L12 16.78m2.5-1.933L12 17.5l-2.5-2.653"></svg:path><svg:path d="M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path></svg:g>`,
})
export class MynauiCalendarDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarDownSolidIcon],svg[mynaui-calendar-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3a.75.75 0 0 0-1.5 0v.301l-.035.003c-.71.054-1.309.169-1.856.432a4.65 4.65 0 0 0-2.083 1.97c-.287.532-.41 1.113-.469 1.793c-.057.662-.057 1.482-.057 2.51v4.981c0 1.029 0 1.85.057 2.511c.06.68.182 1.261.469 1.792a4.65 4.65 0 0 0 2.083 1.971c.547.263 1.146.378 1.856.432c.696.054 1.56.054 2.654.054h5.262c1.094 0 1.958 0 2.654-.054c.71-.055 1.309-.169 1.856-.432a4.65 4.65 0 0 0 2.083-1.97c.287-.532.41-1.113.469-1.793c.057-.662.057-1.482.057-2.51V10.01c0-1.029 0-1.85-.057-2.511c-.06-.68-.182-1.261-.469-1.792a4.65 4.65 0 0 0-2.083-1.971c-.547-.263-1.146-.378-1.856-.432L17.25 3.3V3a.75.75 0 0 0-1.5 0v.253q-.515-.004-1.119-.003H9.37q-.604 0-1.119.003zM5.51 5.088c.294-.142.663-.232 1.24-.282V5a.75.75 0 0 0 1.5 0v-.247A151 151 0 0 1 9.4 4.75h5.2q.639 0 1.15.003V5a.75.75 0 0 0 1.5 0v-.194c.577.05.946.14 1.24.282a3.15 3.15 0 0 1 1.414 1.33c.114.212.196.466.25.832H3.846c.055-.366.137-.62.251-.831A3.15 3.15 0 0 1 5.51 5.088m7.243 6.413l-.002 4.109l1.203-1.278a.75.75 0 1 1 1.092 1.029l-2.5 2.653a.75.75 0 0 1-1.092 0l-2.5-2.653a.75.75 0 0 1 1.092-1.029l1.205 1.279l.002-4.112a.75.75 0 1 1 1.5.002"></svg:path>`,
})
export class MynauiCalendarDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarMinusIcon],svg[mynaui-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5V3m-9 2V3M3.25 8h17.5M10 14h4M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path>`,
})
export class MynauiCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarMinusSolidIcon],svg[mynaui-calendar-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3a.75.75 0 0 0-1.5 0v.301l-.035.003c-.71.054-1.309.169-1.856.432a4.65 4.65 0 0 0-2.083 1.97c-.287.532-.41 1.113-.469 1.793c-.057.662-.057 1.482-.057 2.51v4.981c0 1.029 0 1.85.057 2.511c.06.68.182 1.261.469 1.792a4.65 4.65 0 0 0 2.083 1.971c.547.263 1.146.378 1.856.432c.696.054 1.56.054 2.654.054h5.262c1.094 0 1.958 0 2.654-.054c.71-.055 1.309-.169 1.856-.432a4.65 4.65 0 0 0 2.083-1.97c.287-.532.41-1.113.469-1.793c.057-.662.057-1.482.057-2.51V10.01c0-1.029 0-1.85-.057-2.511c-.06-.68-.182-1.261-.469-1.792a4.65 4.65 0 0 0-2.083-1.971c-.547-.263-1.146-.378-1.856-.432L17.25 3.3V3a.75.75 0 0 0-1.5 0v.253q-.515-.004-1.119-.003H9.37q-.604 0-1.119.003zM5.51 5.088c.294-.142.663-.232 1.24-.282V5a.75.75 0 0 0 1.5 0v-.247A151 151 0 0 1 9.4 4.75h5.2q.639 0 1.15.003V5a.75.75 0 0 0 1.5 0v-.194c.577.05.946.14 1.24.282a3.15 3.15 0 0 1 1.414 1.33c.114.212.196.466.25.832H3.846c.055-.366.137-.62.251-.831A3.15 3.15 0 0 1 5.51 5.088M10 13.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiCalendarMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarPlusIcon],svg[mynaui-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5V3m-9 2V3M3.25 8h17.5M10 14h4m-2-2v4m-9-5.956c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path>`,
})
export class MynauiCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarPlusSolidIcon],svg[mynaui-calendar-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3a.75.75 0 0 0-1.5 0v.301l-.035.003c-.71.054-1.309.169-1.856.432a4.65 4.65 0 0 0-2.083 1.97c-.287.532-.41 1.113-.469 1.793c-.057.662-.057 1.482-.057 2.51v4.981c0 1.029 0 1.85.057 2.511c.06.68.182 1.261.469 1.792a4.65 4.65 0 0 0 2.083 1.971c.547.263 1.146.378 1.856.432c.696.054 1.56.054 2.654.054h5.262c1.094 0 1.958 0 2.654-.054c.71-.055 1.309-.169 1.856-.432a4.65 4.65 0 0 0 2.083-1.97c.287-.532.41-1.113.469-1.793c.057-.662.057-1.482.057-2.51V10.01c0-1.029 0-1.85-.057-2.511c-.06-.68-.182-1.261-.469-1.792a4.65 4.65 0 0 0-2.083-1.971c-.547-.263-1.146-.378-1.856-.432L17.25 3.3V3a.75.75 0 0 0-1.5 0v.253q-.515-.004-1.119-.003H9.37q-.604 0-1.119.003zM5.51 5.088c.294-.142.663-.232 1.24-.282V5a.75.75 0 0 0 1.5 0v-.247A151 151 0 0 1 9.4 4.75h5.2q.639 0 1.15.003V5a.75.75 0 0 0 1.5 0v-.194c.577.05.946.14 1.24.282a3.15 3.15 0 0 1 1.414 1.33c.114.212.196.466.25.832H3.846c.055-.366.137-.62.251-.831A3.15 3.15 0 0 1 5.51 5.088M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiCalendarPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarSlashIcon],svg[mynaui-calendar-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 5V3M3.25 8H11m9.75 0H16m-1.4-4H9.4c-2.24 0-3.36 0-4.216.412a3.9 3.9 0 0 0-1.748 1.65C3 6.872 3 7.93 3 10.045v4.912c0 .827 0 1.492.026 2.044M3 21l1.138-1.138M21 3l-1.692 1.692m0 0c.528.352.96.822 1.256 1.37c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a4 4 0 0 1-1.046-.726m15.17-15.17L16 8m0 0L4.138 19.862"></svg:path>`,
})
export class MynauiCalendarSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarSlashSolidIcon],svg[mynaui-calendar-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25a.75.75 0 0 1 .75.75v.253q.515-.004 1.119-.003H14.6a.75.75 0 0 1 0 1.5H9.4q-.639 0-1.15.003V5a.75.75 0 0 1-1.5 0v-.194c-.577.05-.946.14-1.24.282a3.15 3.15 0 0 0-1.414 1.33c-.114.212-.196.466-.25.832H11a.75.75 0 0 1 0 1.5H3.755c-.005.374-.005.8-.005 1.294v4.912c0 .833 0 1.478.025 2.009a.75.75 0 0 1-1.498.07c-.027-.57-.027-1.25-.027-2.063V10.01c0-1.029 0-1.85.057-2.511c.06-.68.182-1.261.469-1.792a4.65 4.65 0 0 1 2.083-1.971c.547-.263 1.146-.378 1.856-.432L6.75 3.3V3a.75.75 0 0 1 .75-.75m12.97.22a.75.75 0 1 1 1.06 1.06l-1.107 1.108c.317.314.588.674.801 1.069c.287.53.41 1.112.469 1.792c.057.662.057 1.482.057 2.51v4.981c0 1.029 0 1.85-.057 2.511c-.06.68-.182 1.261-.469 1.792a4.65 4.65 0 0 1-2.083 1.971c-.547.263-1.146.378-1.856.432c-.696.054-1.56.054-2.654.054H9.37c-1.094 0-1.958 0-2.654-.054c-.71-.055-1.309-.169-1.856-.432a5 5 0 0 1-.67-.392l-.659.658a.75.75 0 0 1-1.06-1.06z"></svg:path>`,
})
export class MynauiCalendarSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarSolidIcon],svg[mynaui-calendar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25a.75.75 0 0 1 .75.75v.253q.515-.004 1.119-.003h5.262q.604 0 1.119.003V3a.75.75 0 0 1 1.5 0v.301q.018 0 .035.003c.71.054 1.309.169 1.856.432a4.65 4.65 0 0 1 2.083 1.97c.287.532.41 1.113.469 1.793c.057.662.057 1.482.057 2.51v4.981c0 1.029 0 1.85-.057 2.511c-.06.68-.182 1.261-.469 1.792a4.65 4.65 0 0 1-2.083 1.971c-.547.263-1.146.378-1.856.432c-.696.054-1.56.054-2.654.054H9.37c-1.094 0-1.958 0-2.654-.054c-.71-.055-1.309-.169-1.856-.432a4.65 4.65 0 0 1-2.083-1.97c-.287-.532-.41-1.113-.469-1.793c-.057-.662-.057-1.482-.057-2.51V10.01c0-1.029 0-1.85.057-2.511c.06-.68.182-1.261.469-1.792A4.65 4.65 0 0 1 4.86 3.736c.547-.263 1.146-.378 1.856-.432L6.75 3.3V3a.75.75 0 0 1 .75-.75m-.75 2.556c-.577.05-.946.14-1.24.282a3.15 3.15 0 0 0-1.414 1.33c-.114.212-.196.466-.25.832h16.309c-.055-.366-.137-.62-.251-.831a3.15 3.15 0 0 0-1.413-1.331c-.295-.142-.664-.232-1.241-.282V5a.75.75 0 0 1-1.5 0v-.247q-.511-.004-1.15-.003H9.4q-.639 0-1.15.003V5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class MynauiCalendarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarUpIcon],svg[mynaui-calendar-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 5V3m-9 2V3M3.25 8h17.5m-8.747 9.5L12 12.22m2.5 1.933L12 11.5l-2.5 2.653"></svg:path><svg:path d="M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path></svg:g>`,
})
export class MynauiCalendarUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarUpSolidIcon],svg[mynaui-calendar-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3a.75.75 0 0 0-1.5 0v.301l-.035.003c-.71.054-1.309.169-1.856.432a4.65 4.65 0 0 0-2.083 1.97c-.287.532-.41 1.113-.469 1.793c-.057.662-.057 1.482-.057 2.51v4.981c0 1.029 0 1.85.057 2.511c.06.68.182 1.261.469 1.792a4.65 4.65 0 0 0 2.083 1.971c.547.263 1.146.378 1.856.432c.696.054 1.56.054 2.654.054h5.262c1.094 0 1.958 0 2.654-.054c.71-.055 1.309-.169 1.856-.432a4.65 4.65 0 0 0 2.083-1.97c.287-.532.41-1.113.469-1.793c.057-.662.057-1.482.057-2.51V10.01c0-1.029 0-1.85-.057-2.511c-.06-.68-.182-1.261-.469-1.792a4.65 4.65 0 0 0-2.083-1.971c-.547-.263-1.146-.378-1.856-.432L17.25 3.3V3a.75.75 0 0 0-1.5 0v.253q-.515-.004-1.119-.003H9.37q-.604 0-1.119.003zM5.51 5.088c.294-.142.663-.232 1.24-.282V5a.75.75 0 0 0 1.5 0v-.247A151 151 0 0 1 9.4 4.75h5.2q.639 0 1.15.003V5a.75.75 0 0 0 1.5 0v-.194c.577.05.946.14 1.24.282a3.15 3.15 0 0 1 1.414 1.33c.114.212.196.466.25.832H3.846c.055-.366.137-.62.251-.831A3.15 3.15 0 0 1 5.51 5.088m7.036 5.898l2.5 2.653a.75.75 0 0 1-1.092 1.029l-1.203-1.278l.002 4.11a.75.75 0 0 1-1.5 0l-.002-4.11l-1.205 1.278a.75.75 0 0 1-1.092-1.029l2.5-2.653a.75.75 0 0 1 1.092 0"></svg:path>`,
})
export class MynauiCalendarUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarXIcon],svg[mynaui-calendar-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 5V3m-9 2V3M3.25 8h17.5M10.5 12.5l3 3m0-3l-3 3M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412c.753.362 1.364.94 1.748 1.65c.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z"></svg:path>`,
})
export class MynauiCalendarXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCalendarXSolidIcon],svg[mynaui-calendar-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 3a.75.75 0 0 0-1.5 0v.301l-.035.003c-.71.054-1.309.169-1.856.432a4.65 4.65 0 0 0-2.083 1.97c-.287.532-.41 1.113-.469 1.793c-.057.662-.057 1.482-.057 2.51v4.981c0 1.029 0 1.85.057 2.511c.06.68.182 1.261.469 1.792a4.65 4.65 0 0 0 2.083 1.971c.547.263 1.146.378 1.856.432c.696.054 1.56.054 2.654.054h5.262c1.094 0 1.958 0 2.654-.054c.71-.055 1.309-.169 1.856-.432a4.65 4.65 0 0 0 2.083-1.97c.287-.532.41-1.113.469-1.793c.057-.662.057-1.482.057-2.51V10.01c0-1.029 0-1.85-.057-2.511c-.06-.68-.182-1.261-.469-1.792a4.65 4.65 0 0 0-2.083-1.971c-.547-.263-1.146-.378-1.856-.432L17.25 3.3V3a.75.75 0 0 0-1.5 0v.253q-.515-.004-1.119-.003H9.37q-.604 0-1.119.003zM5.51 5.088c.294-.142.663-.232 1.24-.282V5a.75.75 0 0 0 1.5 0v-.247A151 151 0 0 1 9.4 4.75h5.2q.639 0 1.15.003V5a.75.75 0 0 0 1.5 0v-.194c.577.05.946.14 1.24.282a3.15 3.15 0 0 1 1.414 1.33c.114.212.196.466.25.832H3.846c.055-.366.137-.62.251-.831A3.15 3.15 0 0 1 5.51 5.088m4.46 6.882a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiCalendarXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCameraIcon],svg[mynaui-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.52 20.414c.308-.375.48-.884.48-1.414V7c0-.53-.172-1.04-.48-1.414C20.215 5.21 19.799 5 19.365 5h-8.981C8.659 5 8.325 3.269 6.827 3.026C6.563 2.983 6.289 3 6.022 3c-.953 0-1.429 0-1.804.159a2 2 0 0 0-1.059 1.06C3 4.592 3 5.068 3 6.021V19c0 .53.172 1.04.48 1.414c.306.375.722.586 1.156.586h14.728c.434 0 .85-.21 1.157-.586M16 3h3"></svg:path><svg:path d="M13.5 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class MynauiCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCameraSlashIcon],svg[mynaui-camera-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3h1.5M3 21l.528-.528M21 3l-2 2M3.528 20.472c.302.339.697.528 1.108.528h14.728c.434 0 .85-.21 1.157-.586c.307-.375.479-.884.479-1.414V7c0-.53-.172-1.04-.48-1.414C20.215 5.21 19.799 5 19.365 5H19M3.528 20.472l6.184-6.184m0 0A4.002 4.002 0 0 0 17.5 13a4 4 0 0 0-2.712-3.788m-5.076 5.076l5.076-5.076m0 0L19 5m-4.308 0h-4.309C8.659 5 8.325 3.269 6.827 3.026C6.563 2.983 6.289 3 6.022 3c-.953 0-1.429 0-1.804.159a2 2 0 0 0-1.059 1.06C3 4.592 3 5.068 3 6.021v9.734"></svg:path>`,
})
export class MynauiCameraSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCameraSlashSolidIcon],svg[mynaui-camera-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.256 3.748l-.234.002c-.487 0-.813 0-1.066.018c-.246.017-.366.048-.444.081a1.25 1.25 0 0 0-.663.663c-.033.078-.064.198-.08.444c-.019.253-.019.58-.019 1.066v9.734a.75.75 0 0 1-1.5 0v-9.76c0-.454 0-.833.022-1.145c.022-.324.071-.63.197-.926A2.75 2.75 0 0 1 3.925 2.47c.296-.126.602-.175.926-.197c.312-.022.691-.022 1.146-.022h.025l.131-.001c.212-.004.515-.009.794.036c.933.152 1.54.743 1.969 1.158l.122.118c.463.441.792.689 1.345.689h4.309a.75.75 0 0 1 0 1.5h-4.309c-1.17 0-1.871-.618-2.38-1.103l-.079-.075c-.49-.468-.768-.733-1.217-.806c-.136-.022-.262-.02-.451-.018M15.25 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H16a.75.75 0 0 1-.75-.75m5.22-.53a.75.75 0 1 1 1.06 1.06l-1.042 1.042c.23.142.438.324.613.539c.427.522.649 1.203.649 1.889v12c0 .686-.222 1.367-.649 1.89c-.43.525-1.05.86-1.737.86H4.636c-.375 0-.732-.1-1.048-.277l-.058.057a.75.75 0 0 1-1.06-1.06zm-9.873 11.994a3.25 3.25 0 1 0 4.367-4.367z"></svg:path>`,
})
export class MynauiCameraSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCameraSolidIcon],svg[mynaui-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.153 2.249c.212-.004.515-.009.794.036c.933.152 1.54.743 1.969 1.158l.122.118c.463.441.792.689 1.345.689h8.98c.688 0 1.308.335 1.738.86c.427.523.649 1.204.649 1.89v12c0 .686-.222 1.367-.649 1.89c-.43.525-1.05.86-1.737.86H4.636c-.687 0-1.307-.335-1.737-.86c-.427-.523-.649-1.204-.649-1.89V5.997c0-.455 0-.834.022-1.146c.022-.324.071-.63.197-.926A2.75 2.75 0 0 1 3.925 2.47c.296-.126.602-.175.926-.197c.312-.022.691-.022 1.146-.022h.025zM15.25 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M13.5 9.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"></svg:path>`,
})
export class MynauiCameraSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCampfireIcon],svg[mynaui-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.422 20.706l13.156-4.789m0 4.789L5.422 15.917m10.963-4.349A4.75 4.75 0 0 1 12 14.5c-2.623 0-4.75-2.134-4.75-4.767c0-2.632.998-3.709 2.558-6.233c2.923 1.283 2.923 5.133 2.923 5.133s.96-1.856 2.923-2.75c.63 1.86 1.478 3.89.731 5.685"></svg:path>`,
})
export class MynauiCampfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCampfireSolidIcon],svg[mynaui-campfire-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.717 15.66a.75.75 0 0 1 .962-.447l6.321 2.3l6.321-2.3a.75.75 0 1 1 .513 1.41l-4.641 1.688l4.641 1.69a.75.75 0 0 1-.513 1.41L12 19.11l-6.321 2.3A.75.75 0 1 1 5.166 20l4.641-1.689l-4.641-1.689a.75.75 0 0 1-.449-.961"></svg:path><svg:path d="M9.17 3.106a.75.75 0 0 1 .94-.293c1.735.762 2.57 2.275 2.969 3.503q.072.221.127.433a7 7 0 0 1 2.137-1.548a.75.75 0 0 1 1.021.442l.176.511c.266.766.56 1.611.73 2.445c.213 1.04.262 2.166-.192 3.257A5.5 5.5 0 0 1 12 15.25c-3.04 0-5.5-2.472-5.5-5.517c0-2.457.836-3.759 2.01-5.586c.21-.327.43-.67.66-1.041"></svg:path></svg:g>`,
})
export class MynauiCampfireSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartIcon],svg[mynaui-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"></svg:path>`,
})
export class MynauiCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartCheckIcon],svg[mynaui-cart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11 10.242l1.034 1.181c.095.109.266.1.35-.016l2.1-2.907M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path d="M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"></svg:path></svg:g>`,
})
export class MynauiCartCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartCheckSolidIcon],svg[mynaui-cart-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.72 2.788l.55 1.862h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 1 1 1.438-.425m11.372 6.151a.75.75 0 0 0-1.216-.878l-1.713 2.371l-.599-.684a.75.75 0 1 0-1.128.988l1.034 1.181a.974.974 0 0 0 1.522-.07zM8.5 17.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class MynauiCartCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartMinusIcon],svg[mynaui-cart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3m7.5 7h4"></svg:path>`,
})
export class MynauiCartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartMinusSolidIcon],svg[mynaui-cart-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.72 2.788l.55 1.862h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 1 1 1.438-.425M10.5 9.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-2 8a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class MynauiCartMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartPlusIcon],svg[mynaui-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 10h4m-2-2v4m4 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"></svg:path>`,
})
export class MynauiCartPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartPlusSolidIcon],svg[mynaui-cart-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.72 2.788l.55 1.862h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 1 1 1.438-.425M13.25 8a.75.75 0 0 0-1.5 0v1.25H10.5a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5h-1.25zM8.5 17.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class MynauiCartPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartSolidIcon],svg[mynaui-cart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.787 2.28a.75.75 0 0 1 .932.508l.55 1.862h14.655c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 0 1 .506-.932M6.25 19.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m8 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path>`,
})
export class MynauiCartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartXIcon],svg[mynaui-cart-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 8.5l3 3m0-3l-3 3m5.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"></svg:path>`,
})
export class MynauiCartXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCartXSolidIcon],svg[mynaui-cart-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.72 2.788l.55 1.862h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 1 1 1.438-.425m7.81 5.182a.75.75 0 1 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 0 0-1.06-1.06l-.97.97zM8.5 17.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class MynauiCartXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCastScreenIcon],svg[mynaui-cast-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 8.028c0-.956 0-1.434.108-1.826a3 3 0 0 1 2.094-2.094C5.594 4 6.072 4 7.028 4H16.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 6.28 21 7.12 21 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 20 17.88 20 16.2 20h-2.053"></svg:path><svg:path d="M11 20a8 8 0 0 0-8-8m0 8.004l.354-.354M7 20a4 4 0 0 0-4-4"></svg:path></svg:g>`,
})
export class MynauiCastScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCastScreenSolidIcon],svg[mynaui-cast-screen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.91 3.25h9.322c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v6.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-2.085a.75.75 0 0 1 0-1.5H16.2c.852 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207a2.25 2.25 0 0 0 .983-.983c.1-.198.17-.459.207-.913c.038-.462.038-1.057.038-1.909V8.8c0-.852 0-1.447-.038-1.91c-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038H7.028c-1.006 0-1.357.007-1.626.081a2.25 2.25 0 0 0-1.57 1.57c-.075.27-.082.621-.082 1.627a.75.75 0 1 1-1.5 0V7.91c0-.84 0-1.415.135-1.906a3.75 3.75 0 0 1 2.618-2.618c.491-.136 1.065-.135 1.906-.135M2.25 12a.75.75 0 0 1 .75-.75A8.75 8.75 0 0 1 11.75 20a.75.75 0 0 1-.75.75l-8 .003a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiCastScreenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCenterFocusIcon],svg[mynaui-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0m-5.6 9c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6m18 0c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21m0-18c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4"></svg:path>`,
})
export class MynauiCenterFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCenterFocusSolidIcon],svg[mynaui-center-focus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-2.6-6h-.033c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655V9.4a.75.75 0 0 0 1.5 0c0-1.132 0-1.937.052-2.566c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42c.305-.155.69-.251 1.31-.302c.63-.051 1.434-.052 2.566-.052a.75.75 0 0 0 0-1.5m5.2 1.5c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.051.63.052 1.434.052 2.566a.75.75 0 0 0 1.5 0v-.033c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057H14.6a.75.75 0 0 0 0 1.5M3.75 14.6a.75.75 0 0 0-1.5 0v.033c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057H9.4a.75.75 0 0 0 0-1.5c-1.132 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.155-.305-.251-.69-.302-1.31c-.051-.63-.052-1.434-.052-2.566m18 0a.75.75 0 0 0-1.5 0c0 1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052a.75.75 0 0 0 0 1.5h.033c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655z"></svg:path>`,
})
export class MynauiCenterFocusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarIcon],svg[mynaui-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 21V3m-5 18V9M7 21v-5"></svg:path>`,
})
export class MynauiChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarOneIcon],svg[mynaui-chart-bar-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8v13M12 3v18m-6-9v9"></svg:path>`,
})
export class MynauiChartBarOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarOneSolidIcon],svg[mynaui-chart-bar-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75c-.69 0-1.25.56-1.25 1.25v18a1.25 1.25 0 1 0 2.5 0V3c0-.69-.56-1.25-1.25-1.25m6 5c-.69 0-1.25.56-1.25 1.25v13a1.25 1.25 0 1 0 2.5 0V8c0-.69-.56-1.25-1.25-1.25m-12 4c-.69 0-1.25.56-1.25 1.25v9a1.25 1.25 0 1 0 2.5 0v-9c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class MynauiChartBarOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarSolidIcon],svg[mynaui-chart-bar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1.75c-.69 0-1.25.56-1.25 1.25v18a1.25 1.25 0 1 0 2.5 0V3c0-.69-.56-1.25-1.25-1.25m-5 6c-.69 0-1.25.56-1.25 1.25v12a1.25 1.25 0 1 0 2.5 0V9c0-.69-.56-1.25-1.25-1.25m-5 7c-.69 0-1.25.56-1.25 1.25v5a1.25 1.25 0 1 0 2.5 0v-5c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class MynauiChartBarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarTwoIcon],svg[mynaui-chart-bar-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9.429V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v8.286m6-3.857V21m0-11.571h4a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-4m0 0H9m0 0v-7.714M9 21H5a2 2 0 0 1-2-2v-3.714a2 2 0 0 1 2-2h4"></svg:path>`,
})
export class MynauiChartBarTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarTwoSolidIcon],svg[mynaui-chart-bar-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.25A2.75 2.75 0 0 0 8.25 5v7.536H5a2.75 2.75 0 0 0-2.75 2.75V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-7.571A2.75 2.75 0 0 0 19 8.679h-3.25V5A2.75 2.75 0 0 0 13 2.25z"></svg:path>`,
})
export class MynauiChartBarTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBubbleIcon],svg[mynaui-chart-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.863a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0m5.969 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path>`,
})
export class MynauiChartBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBubbleSolidIcon],svg[mynaui-chart-bubble-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 5.613a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M8 2.25a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5m7.469 11a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5"></svg:path>`,
})
export class MynauiChartBubbleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartGraphIcon],svg[mynaui-chart-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.5v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H21m-18-5v-12m0 12l3.857-3.213c1.634-1.362 2.708-1.222 4.119.189l.006.006c1.538 1.538 2.64 1.474 4.172.133L21 7.5"></svg:path>`,
})
export class MynauiChartGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartGraphSolidIcon],svg[mynaui-chart-graph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.5a.75.75 0 0 0-1.5 0v13.83c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.201 1.203c.337.171.694.238 1.073.27c.364.029.81.029 1.342.029H21a.75.75 0 0 0 0-1.5H6.197c-.571 0-.955 0-1.25-.025c-.287-.023-.424-.065-.515-.111a1.25 1.25 0 0 1-.546-.547c-.046-.09-.088-.228-.111-.515A17 17 0 0 1 3.75 17.3v-1.449l3.587-2.988c.764-.637 1.253-.796 1.615-.773c.37.023.826.249 1.493.916l.007.007c.817.817 1.656 1.353 2.608 1.365c.944.012 1.783-.494 2.588-1.199l5.846-5.115a.75.75 0 1 0-.988-1.128L14.66 12.05c-.726.635-1.205.832-1.58.827c-.366-.005-.847-.206-1.568-.926l-.006-.006c-.744-.744-1.53-1.294-2.459-1.353c-.935-.06-1.8.393-2.67 1.117L3.75 13.9z"></svg:path>`,
})
export class MynauiChartGraphSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartLineIcon],svg[mynaui-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5L9 10l4 6l8-9.5"></svg:path>`,
})
export class MynauiChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartLineSolidIcon],svg[mynaui-chart-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.805 5.544a1.25 1.25 0 0 0-1.761.15l-6.928 8.227l-3.076-4.614a1.25 1.25 0 0 0-1.958-.155l-6 6.5a1.25 1.25 0 1 0 1.837 1.696l4.922-5.333l3.119 4.678a1.25 1.25 0 0 0 1.996.112l8-9.5a1.25 1.25 0 0 0-.15-1.761"></svg:path>`,
})
export class MynauiChartLineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieIcon],svg[mynaui-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 0 0 9-9h-9V3a9 9 0 0 0 0 18"></svg:path>`,
})
export class MynauiChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieOneIcon],svg[mynaui-chart-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9h-9m0 9a9 9 0 1 1 0-18m0 18v-9m0-9v9"></svg:path>`,
})
export class MynauiChartPieOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieOneSolidIcon],svg[mynaui-chart-pie-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3.784v7.466h7.466a8.25 8.25 0 0 0-7.466-7.466m7.466 8.966H12.75v7.466a8.25 8.25 0 0 0 7.466-7.466M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"></svg:path>`,
})
export class MynauiChartPieOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieSolidIcon],svg[mynaui-chart-pie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a.75.75 0 0 0-.75-.75h-8.25V3a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiChartPieSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieTwoIcon],svg[mynaui-chart-pie-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3a9 9 0 1 0 6.364 15.364M12 3a9 9 0 0 1 6.364 15.364M12 3v9l6.364 6.364"></svg:path>`,
})
export class MynauiChartPieTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChartPieTwoSolidIcon],svg[mynaui-chart-pie-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3.784v7.905l5.59 5.59a8.25 8.25 0 0 0-5.59-13.496M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.72 9.72 0 0 1-2.856 6.894A9.72 9.72 0 0 1 12 21.75A9.75 9.75 0 0 1 2.25 12"></svg:path>`,
})
export class MynauiChartPieTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatIcon],svg[mynaui-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path>`,
})
export class MynauiChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatCheckIcon],svg[mynaui-chat-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.5 12.323l1.379 1.575a.3.3 0 0 0 .466-.022l2.8-3.876"></svg:path><svg:path d="M12 21a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path></svg:g>`,
})
export class MynauiChatCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatCheckSolidIcon],svg[mynaui-chat-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m12.334-2.608a.75.75 0 0 1 .169 1.047l-2.8 3.876a1.05 1.05 0 0 1-1.639.077l-1.378-1.576a.75.75 0 0 1 1.128-.987l1.005 1.148l2.468-3.416a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiChatCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatDotsIcon],svg[mynaui-chat-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.75v-.5m4 .5v-.5m-8 .5v-.5M12 21a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path>`,
})
export class MynauiChatDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatDotsSolidIcon],svg[mynaui-chat-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75a9.7 9.7 0 0 1-4.342-1.018c-.21-.104-.523-.114-1.01.005a9 9 0 0 0-.729.22l-.086.03c-.22.074-.46.154-.683.214c-1.427.382-2.733-.924-2.351-2.35c.06-.224.14-.463.214-.684l.03-.086c.085-.255.163-.495.22-.729c.12-.487.11-.8.005-1.01A9.7 9.7 0 0 1 2.25 12m6.5.25a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiChatDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatMessagesIcon],svg[mynaui-chat-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12a5 5 0 0 1 7 7m-7-7a5 5 0 0 0-2 4a5 5 0 0 0 .224 1.483c.272.88.076 1.86-.099 2.784a.468.468 0 0 0 .592.539c.848-.232 1.691-.43 2.557-.112A5 5 0 0 0 8 21a4.99 4.99 0 0 0 4-2m-7-7c0-4.685 2.875-9 8-9a8 8 0 0 1 7.532 10.7c-.476 1.326.037 3.102.337 4.568a.451.451 0 0 1-.584.526c-1.312-.41-2.852-.986-4.085-.466c-1.334.562-2.736.672-4.2.672"></svg:path>`,
})
export class MynauiChatMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatMessagesSolidIcon],svg[mynaui-chat-messages-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.36 19.748c1.378-.019 2.775-.157 4.132-.73c.421-.177.945-.187 1.585-.068c.531.098 1.066.268 1.622.445l.363.115a1.2 1.2 0 0 0 1.542-1.393q-.07-.337-.143-.669a20 20 0 0 1-.308-1.616c-.101-.753-.092-1.386.085-1.88c.33-.923.51-1.917.51-2.952A8.75 8.75 0 0 0 13 2.25c-2.794 0-5.005 1.186-6.502 3.019c-1.412 1.73-2.171 4.008-2.242 6.368A5.74 5.74 0 0 0 2.251 16c0 .593.09 1.166.257 1.706c.207.665.066 1.444-.119 2.422a1.218 1.218 0 0 0 1.527 1.401c.86-.235 1.485-.357 2.1-.13c.62.227 1.288.351 1.984.351a5.74 5.74 0 0 0 4.36-2.002M8 11.75a4.25 4.25 0 1 1-1.466 8.24c-.934-.343-1.831-.207-2.589-.02c.148-.806.281-1.789-.004-2.709A4.3 4.3 0 0 1 3.751 16a4.24 4.24 0 0 1 1.7-3.4A4.23 4.23 0 0 1 8 11.75"></svg:path>`,
})
export class MynauiChatMessagesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatMinusIcon],svg[mynaui-chat-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 12h5M12 21a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path>`,
})
export class MynauiChatMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatMinusSolidIcon],svg[mynaui-chat-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m7.25-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiChatMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatPlusIcon],svg[mynaui-chat-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 12h5M12 9.5v5m0 6.5a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path>`,
})
export class MynauiChatPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatPlusSolidIcon],svg[mynaui-chat-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12M12 8.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V9.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiChatPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatSolidIcon],svg[mynaui-chat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25"></svg:path>`,
})
export class MynauiChatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatXIcon],svg[mynaui-chat-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 10l4 4m0-4l-4 4m2 7a9 9 0 1 0-9-9c0 1.44.338 2.8.94 4.007c.453.911-.177 2.14-.417 3.037a1.17 1.17 0 0 0 1.433 1.433c.897-.24 2.126-.87 3.037-.416A9 9 0 0 0 12 21"></svg:path>`,
})
export class MynauiChatXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChatXSolidIcon],svg[mynaui-chat-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 1.558.366 3.033 1.018 4.342c.104.21.114.523-.005 1.01a9 9 0 0 1-.22.729l-.03.086c-.074.22-.154.46-.214.683c-.382 1.427.924 2.733 2.35 2.351c.224-.06.463-.14.684-.214l.086-.03a9 9 0 0 1 .729-.22c.487-.12.8-.11 1.01-.005A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m7.22-2.53a.75.75 0 0 1 1.06 0L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiChatXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckIcon],svg[mynaui-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 13.626l1.606 1.722c.886.95 1.329 1.424 1.825 1.574c.436.131.9.096 1.315-.1c.473-.224.852-.761 1.612-1.836L18 7"></svg:path>`,
})
export class MynauiCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleIcon],svg[mynaui-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleOneIcon],svg[mynaui-check-circle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9 8.806l3.562 3.94a.788.788 0 0 0 1.206-.055L21 3"></svg:path><svg:path d="M21 12a9 9 0 1 1-9-9"></svg:path></svg:g>`,
})
export class MynauiCheckCircleOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleOneSolidIcon],svg[mynaui-check-circle-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.449 2.399a.75.75 0 0 1 .152 1.05l-7.232 9.69a1.537 1.537 0 0 1-2.364.11l-3.561-3.94a.75.75 0 1 1 1.112-1.006l3.562 3.939l.007.005q.006.003.02.003l.017-.004l.004-.004l7.233-9.69a.75.75 0 0 1 1.05-.153M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12S6.615 2.25 12 2.25a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MynauiCheckCircleOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleSolidIcon],svg[mynaui-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.523-3.308a.75.75 0 0 0-1.048.169l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 0 0-.168-1.048"></svg:path>`,
})
export class MynauiCheckCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckDiamondIcon],svg[mynaui-check-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckDiamondSolidIcon],svg[mynaui-check-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m4.983 7.202a.75.75 0 0 1 .168 1.047l-3.597 4.981a1.75 1.75 0 0 1-2.736.128l-1.506-1.72a.75.75 0 1 1 1.13-.989l1.505 1.721a.25.25 0 0 0 .39-.018l3.598-4.981a.75.75 0 0 1 1.048-.169"></svg:path>`,
})
export class MynauiCheckDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckHexagonIcon],svg[mynaui-check-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckHexagonSolidIcon],svg[mynaui-check-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0m5.093 6.587a.75.75 0 0 1 .168 1.047l-3.597 4.981a1.75 1.75 0 0 1-2.736.128l-1.506-1.72a.75.75 0 1 1 1.13-.989l1.505 1.721a.25.25 0 0 0 .39-.018l3.598-4.981a.75.75 0 0 1 1.048-.169"></svg:path>`,
})
export class MynauiCheckHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckOctagonIcon],svg[mynaui-check-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckOctagonSolidIcon],svg[mynaui-check-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88"></svg:path>`,
})
export class MynauiCheckOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckSolidIcon],svg[mynaui-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.577 6.183a1 1 0 0 1 .24 1.394l-5.666 8.02c-.36.508-.665.94-.94 1.269c-.287.34-.61.658-1.038.86a2.83 2.83 0 0 1-2.03.153c-.456-.137-.82-.406-1.149-.702c-.315-.285-.672-.668-1.09-1.116l-1.635-1.753a1 1 0 1 1 1.462-1.364l1.606 1.722c.455.487.754.806.998 1.027c.24.216.344.259.385.271c.196.06.405.045.598-.046c.046-.022.149-.085.36-.338c.216-.257.473-.62.863-1.171l5.642-7.986a1 1 0 0 1 1.394-.24"></svg:path>`,
})
export class MynauiCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckSquareIcon],svg[mynaui-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckSquareOneIcon],svg[mynaui-check-square-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9 8.806l3.562 3.94a.788.788 0 0 0 1.206-.055L21 3"></svg:path><svg:path d="M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1"></svg:path></svg:g>`,
})
export class MynauiCheckSquareOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckSquareOneSolidIcon],svg[mynaui-check-square-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.399 2.551a.75.75 0 0 1 1.202.898l-7.232 9.69a1.537 1.537 0 0 1-2.364.11l-3.561-3.94a.75.75 0 1 1 1.112-1.006l3.562 3.939l.007.005q.006.003.02.003l.017-.004l.004-.004zM9.367 2.25H9.4a.75.75 0 0 1 0 1.5c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-1.1a.75.75 0 0 1 1.5 0v1.133c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.868a4.75 4.75 0 0 1-2.076 2.076c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.077c-.281-.55-.403-1.154-.461-1.868c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057"></svg:path>`,
})
export class MynauiCheckSquareOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckSquareSolidIcon],svg[mynaui-check-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m6.406 6.442a.75.75 0 0 0-1.048.169l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 0 0-.168-1.048"></svg:path>`,
})
export class MynauiCheckSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckWavesIcon],svg[mynaui-check-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckWavesSolidIcon],svg[mynaui-check-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0m5.208 6.617a.75.75 0 0 1 .168 1.047l-3.597 4.981a1.75 1.75 0 0 1-2.736.128l-1.506-1.72a.75.75 0 1 1 1.13-.989l1.505 1.721a.25.25 0 0 0 .39-.018l3.598-4.981a.75.75 0 0 1 1.048-.169"></svg:path>`,
})
export class MynauiCheckWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownIcon],svg[mynaui-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l6 6l6-6M6 12l6 6l6-6"></svg:path>`,
})
export class MynauiChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownLeftIcon],svg[mynaui-chevron-double-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.257 9.257v8.486h8.486"></svg:path><svg:path d="M10.257 5.257v8.486h8.486"></svg:path></svg:g>`,
})
export class MynauiChevronDoubleDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownLeftSolidIcon],svg[mynaui-chevron-double-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.745 18.5a.75.75 0 0 0 .75-.75l-3.253-3.254h6.507a.75.75 0 0 0 .751-.751L10.255 4.5a.75.75 0 0 0-.75.75v6.508L6.25 8.504a.75.75 0 0 0-.751.751v8.494a.75.75 0 0 0 .75.751z"></svg:path>`,
})
export class MynauiChevronDoubleDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownRightIcon],svg[mynaui-chevron-double-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.257 17.743h8.486V9.257"></svg:path><svg:path d="M5.257 13.743h8.486V5.257"></svg:path></svg:g>`,
})
export class MynauiChevronDoubleDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownRightSolidIcon],svg[mynaui-chevron-double-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.255 18.5a.75.75 0 0 1-.75-.75l3.253-3.254H5.25a.75.75 0 0 1-.751-.751L13.745 4.5a.75.75 0 0 1 .75.75v6.508l3.254-3.254a.75.75 0 0 1 .751.751v8.494a.75.75 0 0 1-.75.751z"></svg:path>`,
})
export class MynauiChevronDoubleDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownSolidIcon],svg[mynaui-chevron-double-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 11.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06h4.939l-4.94-4.94a.75.75 0 0 1 0-1.06H18.53a.75.75 0 0 1 0 1.06l-4.939 4.94z"></svg:path>`,
})
export class MynauiChevronDoubleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleLeftIcon],svg[mynaui-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 6l-6 6l6 6m6-12l-6 6l6 6"></svg:path>`,
})
export class MynauiChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleLeftSolidIcon],svg[mynaui-chevron-double-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 5.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0v-4.939l4.94 4.94a.75.75 0 0 0 1.06 0V5.47a.75.75 0 0 0-1.06 0l-4.94 4.939z"></svg:path>`,
})
export class MynauiChevronDoubleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleRightIcon],svg[mynaui-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 18l6-6l-6-6M6 18l6-6l-6-6"></svg:path>`,
})
export class MynauiChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleRightSolidIcon],svg[mynaui-chevron-double-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0v-4.939l-4.94 4.94a.75.75 0 0 1-1.06 0V5.47a.75.75 0 0 1 1.06 0l4.94 4.939z"></svg:path>`,
})
export class MynauiChevronDoubleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpIcon],svg[mynaui-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 12l-6-6l-6 6m12 6l-6-6l-6 6"></svg:path>`,
})
export class MynauiChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpLeftIcon],svg[mynaui-chevron-double-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.743 6.257H6.257v8.486"></svg:path><svg:path d="M18.743 10.257h-8.486v8.486"></svg:path></svg:g>`,
})
export class MynauiChevronDoubleUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpLeftSolidIcon],svg[mynaui-chevron-double-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.745 5.5a.75.75 0 0 1 .75.75l-3.253 3.254h6.507a.75.75 0 0 1 .751.751L10.255 19.5a.75.75 0 0 1-.75-.75v-6.508L6.25 15.496a.75.75 0 0 1-.751-.751V6.251a.75.75 0 0 1 .75-.751z"></svg:path>`,
})
export class MynauiChevronDoubleUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpRightIcon],svg[mynaui-chevron-double-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.743 14.743V6.257H9.257"></svg:path><svg:path d="M13.743 18.743v-8.486H5.257"></svg:path></svg:g>`,
})
export class MynauiChevronDoubleUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpRightSolidIcon],svg[mynaui-chevron-double-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.257 5.507a.75.75 0 0 0-.75.75l3.25 3.25h-6.5a.75.75 0 0 0-.75.75l9.236 9.236a.75.75 0 0 0 .75-.75v-6.5l3.25 3.25a.75.75 0 0 0 .75-.75V6.257a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronDoubleUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpSolidIcon],svg[mynaui-chevron-double-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 12.53a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h4.939l-4.94 4.94a.75.75 0 0 0 0 1.06H18.53a.75.75 0 0 0 0-1.06l-4.939-4.94z"></svg:path>`,
})
export class MynauiChevronDoubleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownIcon],svg[mynaui-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 9l6 6l6-6"></svg:path>`,
})
export class MynauiChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownCircleIcon],svg[mynaui-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.5 10.75l-3.5 3.5l-3.5-3.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownCircleSolidIcon],svg[mynaui-chevron-down-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.78-1.78a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L12 13.19z"></svg:path>`,
})
export class MynauiChevronDownCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftIcon],svg[mynaui-chevron-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.879 7.636v8.485h8.485"></svg:path>`,
})
export class MynauiChevronDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftCircleIcon],svg[mynaui-chevron-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.95 13.95H10V9"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronDownLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftCircleSolidIcon],svg[mynaui-chevron-down-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.5-3a.75.75 0 0 0-1.5 0v4.95a.75.75 0 0 0 .75.75h4.95a.75.75 0 1 0 0-1.5h-4.2z"></svg:path>`,
})
export class MynauiChevronDownLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftSolidIcon],svg[mynaui-chevron-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.364 16.871a.75.75 0 0 0 .75-.75L7.879 6.886a.75.75 0 0 0-.75.75v8.485c0 .415.335.75.75.75z"></svg:path>`,
})
export class MynauiChevronDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftSquareIcon],svg[mynaui-chevron-down-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.95 13.95H10V9"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronDownLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftSquareSolidIcon],svg[mynaui-chevron-down-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M10.75 9a.75.75 0 0 0-1.5 0v4.95a.75.75 0 0 0 .75.75h4.95a.75.75 0 1 0 0-1.5h-4.2z"></svg:path>`,
})
export class MynauiChevronDownLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftWavesIcon],svg[mynaui-chevron-down-left-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.95 13.95H10V9"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronDownLeftWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftWavesSolidIcon],svg[mynaui-chevron-down-left-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.75 9a.75.75 0 0 0-1.5 0v4.95a.75.75 0 0 0 .75.75h4.95a.75.75 0 1 0 0-1.5h-4.2z"></svg:path>`,
})
export class MynauiChevronDownLeftWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightIcon],svg[mynaui-chevron-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.121 7.636v8.485H7.636"></svg:path>`,
})
export class MynauiChevronDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightCircleIcon],svg[mynaui-chevron-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.95 9v4.95H9"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronDownRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightCircleSolidIcon],svg[mynaui-chevron-down-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M14.7 9a.75.75 0 1 0-1.5 0v4.2H9a.75.75 0 0 0 0 1.5h4.95a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class MynauiChevronDownRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightSolidIcon],svg[mynaui-chevron-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.871 7.636a.75.75 0 0 0-.75-.75l-9.235 9.235c0 .415.336.75.75.75h8.485a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class MynauiChevronDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightSquareIcon],svg[mynaui-chevron-down-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.95 9v4.95H9"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronDownRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightSquareSolidIcon],svg[mynaui-chevron-down-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M14.7 9a.75.75 0 1 0-1.5 0v4.2H9a.75.75 0 0 0 0 1.5h4.95a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class MynauiChevronDownRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightWavesIcon],svg[mynaui-chevron-down-right-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.95 9v4.95H9"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronDownRightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightWavesSolidIcon],svg[mynaui-chevron-down-right-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M14.7 9a.75.75 0 1 0-1.5 0v4.2H9a.75.75 0 0 0 0 1.5h4.95a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class MynauiChevronDownRightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownSolidIcon],svg[mynaui-chevron-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiChevronDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownSquareIcon],svg[mynaui-chevron-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.5 10.75l-3.5 3.5l-3.5-3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownSquareSolidIcon],svg[mynaui-chevron-down-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-.337 7.97a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L12 13.19z"></svg:path>`,
})
export class MynauiChevronDownSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownWavesIcon],svg[mynaui-chevron-down-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.5 10.75l-3.5 3.5l-3.5-3.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronDownWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownWavesSolidIcon],svg[mynaui-chevron-down-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.03 10.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L12 13.19z"></svg:path>`,
})
export class MynauiChevronDownWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftIcon],svg[mynaui-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 6l-6 6l6 6"></svg:path>`,
})
export class MynauiChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftCircleIcon],svg[mynaui-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.25 15.5L9.75 12l3.5-3.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftCircleSolidIcon],svg[mynaui-chevron-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.53-2.97a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L10.81 12z"></svg:path>`,
})
export class MynauiChevronLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftSolidIcon],svg[mynaui-chevron-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.47 18.53a.75.75 0 0 0 1.06 0V5.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06z"></svg:path>`,
})
export class MynauiChevronLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftSquareIcon],svg[mynaui-chevron-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.25 15.5L9.75 12l3.5-3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftSquareSolidIcon],svg[mynaui-chevron-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m4.413 6.78a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L10.81 12z"></svg:path>`,
})
export class MynauiChevronLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftWavesIcon],svg[mynaui-chevron-left-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.25 15.5L9.75 12l3.5-3.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronLeftWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftWavesSolidIcon],svg[mynaui-chevron-left-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M13.78 9.03a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L10.81 12z"></svg:path>`,
})
export class MynauiChevronLeftWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightIcon],svg[mynaui-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 18l6-6l-6-6"></svg:path>`,
})
export class MynauiChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightCircleIcon],svg[mynaui-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.75 8.5l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightCircleSolidIcon],svg[mynaui-chevron-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9.03-4.03a.75.75 0 1 0-1.06 1.06L13.19 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiChevronRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightSolidIcon],svg[mynaui-chevron-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.53 5.47a.75.75 0 0 0-1.06 0v13.06a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiChevronRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightSquareIcon],svg[mynaui-chevron-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.75 8.5l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightSquareSolidIcon],svg[mynaui-chevron-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m1.913 5.72a.75.75 0 1 0-1.06 1.06L13.19 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiChevronRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightWavesIcon],svg[mynaui-chevron-right-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.75 8.5l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronRightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightWavesSolidIcon],svg[mynaui-chevron-right-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m.715 5.895a.75.75 0 1 0-1.06 1.06L13.19 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiChevronRightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpIcon],svg[mynaui-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 15l-6-6l-6 6"></svg:path>`,
})
export class MynauiChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
