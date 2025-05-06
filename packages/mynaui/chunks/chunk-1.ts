import { Component, input } from '@angular/core'

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

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpCircleIcon],svg[mynaui-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.5 13.25l3.5-3.5l3.5 3.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpCircleSolidIcon],svg[mynaui-chevron-up-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.78.72l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 10.81l2.97 2.97a.75.75 0 1 0 1.06-1.06"></svg:path>`,
})
export class MynauiChevronUpCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpDownIcon],svg[mynaui-chevron-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 16l4 4l4-4M8 8l4-4l4 4"></svg:path>`,
})
export class MynauiChevronUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpDownSolidIcon],svg[mynaui-chevron-up-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 3.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h9.06a.75.75 0 0 0 0-1.06zm4 13.06a.75.75 0 0 0 0-1.06H7.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiChevronUpDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftIcon],svg[mynaui-chevron-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.879 16.364V7.879h8.485"></svg:path>`,
})
export class MynauiChevronUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftCircleIcon],svg[mynaui-chevron-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 14.95V10h4.95"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronUpLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftCircleSolidIcon],svg[mynaui-chevron-up-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M10 9.25a.75.75 0 0 0-.75.75v4.95a.75.75 0 1 0 1.5 0v-4.2h4.2a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class MynauiChevronUpLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftSolidIcon],svg[mynaui-chevron-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.879 7.129a.75.75 0 0 0-.75.75v8.485c0 .414.335.75.75.75l9.235-9.235a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftSquareIcon],svg[mynaui-chevron-up-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 14.95V10h4.95"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronUpLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftSquareSolidIcon],svg[mynaui-chevron-up-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.633 7a.75.75 0 0 0-.75.75v4.95a.75.75 0 1 0 1.5 0v-4.2h4.2a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class MynauiChevronUpLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftWavesIcon],svg[mynaui-chevron-up-left-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 14.95V10h4.95"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronUpLeftWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftWavesSolidIcon],svg[mynaui-chevron-up-left-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10 9.25a.75.75 0 0 0-.75.75v4.95a.75.75 0 1 0 1.5 0v-4.2h4.2a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class MynauiChevronUpLeftWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightIcon],svg[mynaui-chevron-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.121 16.364V7.879H7.636"></svg:path>`,
})
export class MynauiChevronUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightCircleIcon],svg[mynaui-chevron-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 10h4.95v4.95"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiChevronUpRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightCircleSolidIcon],svg[mynaui-chevron-up-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9 9.25a.75.75 0 0 0 0 1.5h4.2v4.2a.75.75 0 1 0 1.5 0V10a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronUpRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightSolidIcon],svg[mynaui-chevron-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.886 7.879a.75.75 0 0 1 .75-.75h8.485a.75.75 0 0 1 .75.75v8.485a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class MynauiChevronUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightSquareIcon],svg[mynaui-chevron-up-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 10h4.95v4.95"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronUpRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightSquareSolidIcon],svg[mynaui-chevron-up-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9 9.25a.75.75 0 0 0 0 1.5h4.2v4.2a.75.75 0 1 0 1.5 0V10a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronUpRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightWavesIcon],svg[mynaui-chevron-up-right-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 10h4.95v4.95"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronUpRightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightWavesSolidIcon],svg[mynaui-chevron-up-right-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9 9.25a.75.75 0 0 0 0 1.5h4.2v4.2a.75.75 0 1 0 1.5 0V10a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronUpRightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpSolidIcon],svg[mynaui-chevron-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 8.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h13.06a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiChevronUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpSquareIcon],svg[mynaui-chevron-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.5 13.25l3.5-3.5l3.5 3.5"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiChevronUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpSquareSolidIcon],svg[mynaui-chevron-up-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.163 6.97a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 10.81l2.97 2.97a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class MynauiChevronUpSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpWavesIcon],svg[mynaui-chevron-up-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.5 13.25l3.5-3.5l3.5 3.5"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiChevronUpWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpWavesSolidIcon],svg[mynaui-chevron-up-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12.53 9.22a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 10.81l2.97 2.97a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class MynauiChevronUpWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChipIcon],svg[mynaui-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M6 6H3m3 4H3m3 4H3m3 4H3M21 6h-3m3 4h-3m3 4h-3m3 4h-3"></svg:path>`,
})
export class MynauiChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiChipSolidIcon],svg[mynaui-chip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v1.25H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25V20A1.75 1.75 0 0 1 17 21.75H7A1.75 1.75 0 0 1 5.25 20v-1.25H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25z"></svg:path>`,
})
export class MynauiChipSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleIcon],svg[mynaui-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleDashedIcon],svg[mynaui-circle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 0 1-.706 3.5M12 21a9 9 0 0 1-3.5-.706M3 12c0-1.241.251-2.424.706-3.5M12 3c1.241 0 2.424.251 3.5.706m-9.864 1.93A9 9 0 0 1 8.5 3.706m9.864 14.658a9 9 0 0 1-2.864 1.93m2.864-14.658a9 9 0 0 1 1.93 2.864M5.636 18.364a9 9 0 0 1-1.93-2.864"></svg:path>`,
})
export class MynauiCircleDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleDashedSolidIcon],svg[mynaui-circle-dashed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 3a.75.75 0 0 1 .75-.75a9.7 9.7 0 0 1 3.792.765a.75.75 0 1 1-.584 1.382A8.2 8.2 0 0 0 12 3.75a.75.75 0 0 1-.75-.75m-2.06.414a.75.75 0 0 1-.398.983a8.3 8.3 0 0 0-2.626 1.77a.75.75 0 0 1-1.06-1.061a9.8 9.8 0 0 1 3.102-2.091a.75.75 0 0 1 .983.399m8.644 1.692a.75.75 0 0 1 1.06 0a9.8 9.8 0 0 1 2.091 3.102a.75.75 0 0 1-1.382.584a8.3 8.3 0 0 0-1.77-2.626a.75.75 0 0 1 0-1.06M3.998 7.809a.75.75 0 0 1 .399.983A8.2 8.2 0 0 0 3.75 12a.75.75 0 0 1-1.5 0a9.7 9.7 0 0 1 .765-3.792a.75.75 0 0 1 .983-.399M21 11.25a.75.75 0 0 1 .75.75a9.7 9.7 0 0 1-.765 3.792a.75.75 0 0 1-1.382-.584A8.2 8.2 0 0 0 20.25 12a.75.75 0 0 1 .75-.75M3.414 14.81a.75.75 0 0 1 .983.398a8.3 8.3 0 0 0 1.77 2.626a.75.75 0 0 1-1.061 1.06a9.8 9.8 0 0 1-2.091-3.102a.75.75 0 0 1 .399-.983m15.48 3.024a.75.75 0 0 1 0 1.06a9.8 9.8 0 0 1-3.102 2.091a.75.75 0 0 1-.584-1.382a8.3 8.3 0 0 0 2.626-1.77a.75.75 0 0 1 1.06 0M7.81 20.002a.75.75 0 0 1 .983-.399A8.2 8.2 0 0 0 12 20.25a.75.75 0 0 1 0 1.5a9.7 9.7 0 0 1-3.792-.765a.75.75 0 0 1-.399-.983"></svg:path>`,
})
export class MynauiCircleDashedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfIcon],svg[mynaui-circle-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18V3"></svg:path>`,
})
export class MynauiCircleHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfCircleIcon],svg[mynaui-circle-half-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="mynauiCircleHalfCircle0" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:use href="#mynauiCircleHalfCircle0"></svg:use><svg:use href="#mynauiCircleHalfCircle0"></svg:use><svg:path d="M12 17a5 5 0 0 0 0-10z"></svg:path></svg:g>`,
})
export class MynauiCircleHalfCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfCircleSolidIcon],svg[mynaui-circle-half-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9-5a.75.75 0 0 1 .75-.75a5.75 5.75 0 0 1 0 11.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiCircleHalfCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfSolidIcon],svg[mynaui-circle-half-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 3.784a8.25 8.25 0 0 0 0 16.432zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"></svg:path>`,
})
export class MynauiCircleHalfSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleNotchIcon],svg[mynaui-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.717 4A9.05 9.05 0 0 0 3 11.956C3 16.951 7.03 21 12 21s9-4.05 9-9.044A9.05 9.05 0 0 0 16.283 4"></svg:path>`,
})
export class MynauiCircleNotchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleNotchSolidIcon],svg[mynaui-circle-notch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.625 3.641a.75.75 0 0 1 1.017-.3a9.8 9.8 0 0 1 5.108 8.615c0 5.406-4.362 9.794-9.75 9.794s-9.75-4.388-9.75-9.794a9.8 9.8 0 0 1 5.108-8.615a.75.75 0 1 1 .717 1.318a8.3 8.3 0 0 0-4.325 7.297c0 4.584 3.697 8.294 8.25 8.294s8.25-3.71 8.25-8.294a8.3 8.3 0 0 0-4.325-7.297a.75.75 0 0 1-.3-1.018"></svg:path>`,
})
export class MynauiCircleNotchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleSolidIcon],svg[mynaui-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25"></svg:path>`,
})
export class MynauiCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClickIcon],svg[mynaui-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.92 6.956L5.45 5.473m9.309 1.483l1.47-1.483m-10.78 10.88l1.47-1.484m3.92-9.89V3m-5.88 7.913H3m13.875 5.923l3.814-1.506a.496.496 0 0 0 0-.921l-9.165-3.615a.492.492 0 0 0-.635.64l3.582 9.251c.162.42.75.42.912 0z"></svg:path>`,
})
export class MynauiClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClickSolidIcon],svg[mynaui-click-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.589 3a.75.75 0 0 0-1.5 0v1.978a.75.75 0 0 0 1.5 0zM5.983 4.945A.75.75 0 0 0 4.917 6l1.47 1.483A.75.75 0 1 0 7.452 6.43zM16.761 6a.75.75 0 0 0-1.065-1.055l-1.47 1.484a.75.75 0 1 0 1.065 1.055zM11.8 10.096c-1.025-.404-1.994.617-1.61 1.61l3.581 9.25c.41 1.058 1.901 1.059 2.311 0l1.374-3.543l3.508-1.385c1.048-.414 1.048-1.903 0-2.317zm-6.84.067H3a.75.75 0 0 0 0 1.5h1.96a.75.75 0 0 0 0-1.5m2.492 5.234a.75.75 0 0 0-1.065-1.056l-1.47 1.484a.75.75 0 1 0 1.066 1.056z"></svg:path>`,
})
export class MynauiClickSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClipboardIcon],svg[mynaui-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path><svg:path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></svg:path></svg:g>`,
})
export class MynauiClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClipboardSolidIcon],svg[mynaui-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.354 4.25a2.75 2.75 0 0 1 2.646-2h2a2.75 2.75 0 0 1 2.646 2H17A2.75 2.75 0 0 1 19.75 7v12A2.75 2.75 0 0 1 17 21.75H7A2.75 2.75 0 0 1 4.25 19V7A2.75 2.75 0 0 1 7 4.25zM11 3.75c-.69 0-1.25.56-1.25 1.25v1.25h4.5V5c0-.69-.56-1.25-1.25-1.25z"></svg:path>`,
})
export class MynauiClipboardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockCircleIcon],svg[mynaui-clock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 6v6l4 2"></svg:path></svg:g>`,
})
export class MynauiClockCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockCircleSolidIcon],svg[mynaui-clock-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockDiamondIcon],svg[mynaui-clock-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M12 6v6l4 2"></svg:path></svg:g>`,
})
export class MynauiClockDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockDiamondSolidIcon],svg[mynaui-clock-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M12.75 6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockEightIcon],svg[mynaui-clock-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l-4 2"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockEightSolidIcon],svg[mynaui-clock-eight-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v5.537l-3.585 1.792a.75.75 0 1 0 .67 1.342l4-2A.75.75 0 0 0 12.75 12z"></svg:path>`,
})
export class MynauiClockEightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockElevenIcon],svg[mynaui-clock-eleven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6L9.5 8"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockElevenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockElevenSolidIcon],svg[mynaui-clock-eleven-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v3.385l-1.114-1.782a.75.75 0 0 0-1.272.795l2.5 4A.75.75 0 0 0 12.75 12z"></svg:path>`,
})
export class MynauiClockElevenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockFiveIcon],svg[mynaui-clock-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l2.5 4"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockFiveSolidIcon],svg[mynaui-clock-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6c0 .14.04.278.114.398l2.5 4a.75.75 0 1 0 1.272-.796l-2.386-3.817z"></svg:path>`,
})
export class MynauiClockFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockFourIcon],svg[mynaui-clock-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l4 2"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockFourSolidIcon],svg[mynaui-clock-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockHandIcon],svg[mynaui-clock-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.147 3v9l6 3"></svg:path>`,
})
export class MynauiClockHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockHandSolidIcon],svg[mynaui-clock-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.147 2.25a.75.75 0 0 1 .75.75v8.537l5.585 2.792a.75.75 0 1 1-.67 1.342l-6-3a.75.75 0 0 1-.415-.671V3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiClockHandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockHexagonIcon],svg[mynaui-clock-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="M12 6v6l4 2"></svg:path></svg:g>`,
})
export class MynauiClockHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockHexagonSolidIcon],svg[mynaui-clock-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM12.75 6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockNineIcon],svg[mynaui-clock-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6H7.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockNineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockNineSolidIcon],svg[mynaui-clock-nine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v5.25H7.5a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class MynauiClockNineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockOctagonIcon],svg[mynaui-clock-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M12 6v6l4 2"></svg:path></svg:g>`,
})
export class MynauiClockOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockOctagonSolidIcon],svg[mynaui-clock-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M12.75 6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockOneIcon],svg[mynaui-clock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l2.5-4"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockOneSolidIcon],svg[mynaui-clock-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.386.398l2.5-4a.75.75 0 1 0-1.272-.795L12.75 9.385z"></svg:path>`,
})
export class MynauiClockOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSevenIcon],svg[mynaui-clock-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l-2.5 4"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockSevenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSevenSolidIcon],svg[mynaui-clock-seven-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v5.785l-2.386 3.817a.75.75 0 1 0 1.272.796l2.5-4A.75.75 0 0 0 12.75 12z"></svg:path>`,
})
export class MynauiClockSevenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSixIcon],svg[mynaui-clock-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v10.5m9-4.5a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiClockSixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSixSolidIcon],svg[mynaui-clock-six-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiClockSixSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSquareIcon],svg[mynaui-clock-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M12 6v6l4 2"></svg:path></svg:g>`,
})
export class MynauiClockSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockSquareSolidIcon],svg[mynaui-clock-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M12.75 6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTenIcon],svg[mynaui-clock-ten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l-4-2"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockTenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTenSolidIcon],svg[mynaui-clock-ten-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v4.787L8.335 9.329a.75.75 0 0 0-.67 1.342l4 2A.75.75 0 0 0 12.75 12z"></svg:path>`,
})
export class MynauiClockTenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockThreeIcon],svg[mynaui-clock-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6h4.5"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockThreeSolidIcon],svg[mynaui-clock-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75z"></svg:path>`,
})
export class MynauiClockThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTwelveIcon],svg[mynaui-clock-twelve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m9 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiClockTwelveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTwelveSolidIcon],svg[mynaui-clock-twelve-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiClockTwelveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTwoIcon],svg[mynaui-clock-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 6v6l4-2"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiClockTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockTwoSolidIcon],svg[mynaui-clock-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.085.67l4-2a.75.75 0 1 0-.67-1.34l-2.915 1.457z"></svg:path>`,
})
export class MynauiClockTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockWavesIcon],svg[mynaui-clock-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M12 6v6l4 2"></svg:path></svg:g>`,
})
export class MynauiClockWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiClockWavesSolidIcon],svg[mynaui-clock-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12.75 6a.75.75 0 0 0-1.5 0v6c0 .284.16.544.415.67l4 2a.75.75 0 1 0 .67-1.34l-3.585-1.793z"></svg:path>`,
})
export class MynauiClockWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudIcon],svg[mynaui-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.278 17.497c3.678-3.154-.214-7.384-4.256-7.384C13.175-.969-3.526 8.197 3.875 16.55"></svg:path>`,
})
export class MynauiCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudDownloadIcon],svg[mynaui-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.966 11.136l-.004 8M19.825 17c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662m11.07 1.156L11.962 20L8.78 16.818"></svg:path>`,
})
export class MynauiCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudDownloadSolidIcon],svg[mynaui-cloud-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 8.388c-.832-2.66-2.494-4.222-4.493-4.836c-2.087-.641-4.42-.215-6.354.832s-3.576 2.77-4.216 4.859c-.651 2.13-.228 4.533 1.773 6.796a6.14 6.14 0 0 0 4.72 2.211h1.125l2.28 2.28a.75.75 0 0 0 1.061 0l2.28-2.28h2.1c1.218 0 2.778-.227 3.894-1.184c1.036-.888 1.6-1.91 1.713-2.974c.112-1.057-.23-2.06-.82-2.9c-1.065-1.52-3.012-2.627-5.063-2.804m-1.823 9.862H9.15l-.901-.902a.75.75 0 0 1 1.06-1.06l1.902 1.902l.004-7.054a.75.75 0 0 1 1.5 0l-.004 7.053l1.902-1.901a.75.75 0 0 1 1.06 1.06z"></svg:path>`,
})
export class MynauiCloudDownloadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudLightningIcon],svg[mynaui-cloud-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.825 17c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662"></svg:path><svg:path d="M11.501 11L9 16h5.002L11.5 21"></svg:path></svg:g>`,
})
export class MynauiCloudLightningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudLightningSolidIcon],svg[mynaui-cloud-lightning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 8.388c-.832-2.66-2.494-4.222-4.493-4.836c-2.087-.641-4.42-.215-6.354.832s-3.576 2.77-4.216 4.859c-.651 2.13-.228 4.533 1.773 6.796a6.14 6.14 0 0 0 4.72 2.211h4.012l-1.209 2.414a.75.75 0 1 0 1.342.672l1.544-3.086h3.157c1.218 0 2.778-.227 3.894-1.184c1.036-.888 1.6-1.91 1.713-2.974c.112-1.057-.23-2.06-.82-2.9c-1.065-1.52-3.012-2.627-5.063-2.804m-2.881 9.862h-1.677l.75-1.5H9a.75.75 0 0 1-.67-1.085l2.5-5a.75.75 0 0 1 1.342.67l-1.958 3.916h3.788a.75.75 0 0 1 .67 1.085z"></svg:path>`,
})
export class MynauiCloudLightningSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudRainIcon],svg[mynaui-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.004 19L12 14m4.004 7L16 16m-7.996 1L8 12m11.825 5c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662"></svg:path>`,
})
export class MynauiCloudRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudRainSolidIcon],svg[mynaui-cloud-rain-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 8.388c-.832-2.66-2.494-4.222-4.493-4.836c-2.087-.641-4.42-.215-6.354.832s-3.576 2.77-4.216 4.859c-.651 2.13-.228 4.533 1.773 6.796a6.14 6.14 0 0 0 4.72 2.211h3.228V19a.75.75 0 0 0 1.5 0v-.75h2.498l.002 2.75a.75.75 0 0 0 1.5 0l-.002-2.75h.12c1.218 0 2.778-.227 3.894-1.184c1.036-.888 1.6-1.91 1.713-2.974c.112-1.057-.23-2.06-.82-2.9c-1.065-1.52-3.012-2.627-5.063-2.804m.156 9.862h-1.5L15.25 16a.75.75 0 0 1 1.5 0zm-3.998 0h-1.5L11.25 14a.75.75 0 0 1 1.5 0zm-4.755-7a.75.75 0 0 1 .751.75l.004 5a.75.75 0 1 1-1.5 0l-.004-5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiCloudRainSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSlashIcon],svg[mynaui-cloud-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.875 21l2.793-2.793M20.875 3l-5.532 5.532m0 0q.413.803.68 1.831c4.041 0 7.933 4.23 4.255 7.384c-.91.78-2.245 1.003-3.406 1.003H8.026c-.827 0-1.632-.19-2.358-.543m9.675-9.675l-9.675 9.675M3.24 16C-1.307 9.542 7.728 3 13 6"></svg:path>`,
})
export class MynauiCloudSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSlashSolidIcon],svg[mynaui-cloud-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 9.388c2.05.177 3.997 1.285 5.063 2.803c.59.842.932 1.844.82 2.9c-.113 1.066-.677 2.087-1.713 2.975c-1.116.957-2.676 1.184-3.894 1.184H8.026c-.656 0-1.3-.105-1.91-.305L3.53 21.53a.75.75 0 0 1-1.06-1.06l2.21-2.21a6.1 6.1 0 0 1-1.374-1.221c-2-2.263-2.424-4.666-1.773-6.796c.64-2.09 2.28-3.812 4.216-4.86c1.935-1.046 4.267-1.472 6.354-.831c1.403.431 2.64 1.328 3.54 2.745L20.47 2.47a.75.75 0 1 1 1.06 1.06l-5.175 5.176q.13.328.24.682"></svg:path>`,
})
export class MynauiCloudSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSnowIcon],svg[mynaui-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.004 17.5L12 17m4.004-1.5L16 15m-7.996.5L8 15m4.004 6L12 20.5m4.004-1.5L16 18.5m-7.996.5L8 18.5M19.825 17c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662"></svg:path>`,
})
export class MynauiCloudSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSnowSolidIcon],svg[mynaui-cloud-snow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 8.388c-.832-2.66-2.494-4.222-4.493-4.836c-2.087-.641-4.42-.215-6.354.832s-3.576 2.77-4.216 4.859c-.651 2.13-.228 4.533 1.773 6.796a6.14 6.14 0 0 0 4.003 2.169a.8.8 0 0 0-.059.298l.004.5a.75.75 0 1 0 1.5-.012l-.004-.5a.8.8 0 0 0-.043-.244H12a.75.75 0 0 1-.745-.744l-.004-.5a.75.75 0 0 1 1.5-.012l.004.5a.75.75 0 0 1-.743.756h-.002h3.284a.8.8 0 0 0-.043.256l.004.5a.75.75 0 0 0 1.5-.012l-.004-.5a.8.8 0 0 0-.043-.244h.165c1.218 0 2.778-.227 3.894-1.184c1.036-.888 1.6-1.91 1.713-2.974c.112-1.057-.23-2.06-.82-2.9c-1.065-1.52-3.012-2.627-5.063-2.804m.111 9.862a.75.75 0 0 0-1.414 0zm-8 0a.75.75 0 0 0-1.398-.042q.356.042.717.042zm4.043 2.244a.75.75 0 0 0-1.5.012l.004.5a.75.75 0 0 0 1.5-.012zM7.994 14.25a.75.75 0 0 1 .756.744l.004.5a.75.75 0 0 1-1.5.012l-.004-.5a.75.75 0 0 1 .744-.756m8 0a.75.75 0 0 1 .756.744l.004.5a.75.75 0 0 1-1.5.012l-.004-.5a.75.75 0 0 1 .744-.756"></svg:path>`,
})
export class MynauiCloudSnowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudSolidIcon],svg[mynaui-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.103 4.552c2 .614 3.66 2.175 4.493 4.836c2.05.177 3.997 1.285 5.063 2.803c.59.842.932 1.844.82 2.9c-.113 1.066-.677 2.087-1.713 2.975c-1.116.957-2.676 1.184-3.894 1.184H8.026a6.14 6.14 0 0 1-4.72-2.211c-2-2.263-2.424-4.666-1.773-6.796c.64-2.09 2.28-3.812 4.216-4.86c1.935-1.046 4.267-1.472 6.354-.831"></svg:path>`,
})
export class MynauiCloudSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudUploadIcon],svg[mynaui-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11.966 20l-.004-8m7.863 5c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662"></svg:path><svg:path d="m15.144 14.318l-3.182-3.182l-3.182 3.182"></svg:path></svg:g>`,
})
export class MynauiCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudUploadSolidIcon],svg[mynaui-cloud-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.596 8.388c-.832-2.66-2.494-4.222-4.493-4.836c-2.087-.641-4.42-.215-6.354.832s-3.576 2.77-4.216 4.859c-.651 2.13-.228 4.533 1.773 6.796a6.14 6.14 0 0 0 4.72 2.211h3.19V20a.75.75 0 0 0 1.5 0v-1.75h4.156c1.218 0 2.778-.227 3.894-1.184c1.036-.888 1.6-1.91 1.713-2.974c.112-1.057-.23-2.06-.82-2.9c-1.065-1.52-3.012-2.627-5.063-2.804m-3.88 9.862h-1.5l-.004-5.303l-1.902 1.902a.75.75 0 1 1-1.06-1.061l3.182-3.182a.75.75 0 0 1 1.06 0l3.182 3.182a.75.75 0 0 1-1.06 1.06l-1.902-1.9z"></svg:path>`,
})
export class MynauiCloudUploadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCocktailIcon],svg[mynaui-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 14.25l7.777-9.625C20.306 3.97 19.835 3 18.988 3H5.012c-.847 0-1.318.97-.789 1.625zm0 0V21M6.546 7.5h10.908M7.329 21h9.342"></svg:path>`,
})
export class MynauiCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCocktailSolidIcon],svg[mynaui-cocktail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.012 2.25c-1.463 0-2.307 1.69-1.372 2.846l7.61 9.42v5.734H7.33a.75.75 0 0 0 0 1.5h9.341a.75.75 0 0 0 0-1.5h-3.92v-5.735l7.61-9.419c.934-1.157.09-2.846-1.373-2.846zm1.893 4.5L4.807 4.153a.25.25 0 0 1 .205-.403h13.976c.231 0 .33.25.206.403L17.096 6.75z"></svg:path>`,
})
export class MynauiCocktailSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeIcon],svg[mynaui-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.007-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.007 2.685 3.796l.23.23"></svg:path>`,
})
export class MynauiCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeCircleIcon],svg[mynaui-code-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.022 1.534 1.534 1.534 2.169s-.512 1.146-1.534 2.169l-.132.132M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.853 7.427 11.365 7.427 12s.51 1.146 1.533 2.169l.132.132"></svg:path></svg:g>`,
})
export class MynauiCodeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeCircleSolidIcon],svg[mynaui-code-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.547-3.806a.75.75 0 1 0-1.45-.388l-2.143 8a.75.75 0 0 0 1.449.388zm1.641.975a.75.75 0 1 0-1.06 1.06l.131.132c.527.526.867.869 1.085 1.155c.205.268.23.396.23.484s-.025.216-.23.484c-.218.286-.558.629-1.085 1.155l-.131.131a.75.75 0 1 0 1.06 1.06l.167-.166c.482-.48.895-.894 1.181-1.27c.307-.402.537-.846.537-1.394s-.23-.992-.537-1.394c-.286-.376-.7-.79-1.18-1.27zm-5.816 0a.75.75 0 0 0-1.06 0l-.167.167c-.481.48-.895.894-1.181 1.27c-.307.402-.537.846-.537 1.394s.23.992.537 1.394c.286.376.7.79 1.18 1.27l.168.167a.75.75 0 0 0 1.06-1.06l-.131-.132c-.527-.526-.867-.869-1.085-1.155c-.205-.268-.23-.396-.23-.484s.025-.216.23-.484c.218-.286.558-.629 1.085-1.155l.131-.131a.75.75 0 0 0 0-1.061"></svg:path>`,
})
export class MynauiCodeCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeDiamondIcon],svg[mynaui-code-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.023 1.534 1.534 1.534 2.169s-.512 1.147-1.534 2.17l-.132.13M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.854 7.427 11.365 7.427 12s.51 1.147 1.533 2.17l.132.13"></svg:path></svg:g>`,
})
export class MynauiCodeDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeDiamondSolidIcon],svg[mynaui-code-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m3.007 6.704a.75.75 0 1 0-1.45-.388l-2.143 8a.75.75 0 0 0 1.449.388zm1.641.975a.75.75 0 1 0-1.06 1.06l.131.132c.527.526.867.869 1.085 1.155c.205.268.23.396.23.484s-.025.216-.23.484c-.218.286-.558.629-1.085 1.155l-.131.131a.75.75 0 0 0 1.06 1.061l.167-.167c.482-.48.895-.894 1.181-1.27c.307-.402.537-.846.537-1.394s-.23-.992-.537-1.394c-.286-.376-.7-.789-1.18-1.27zm-5.816 0a.75.75 0 0 0-1.06 0l-.167.167c-.481.48-.895.894-1.181 1.27c-.307.402-.537.846-.537 1.394s.23.992.537 1.394c.286.376.7.79 1.18 1.27l.168.167a.75.75 0 1 0 1.06-1.06l-.131-.132c-.527-.526-.867-.869-1.085-1.155c-.205-.268-.23-.396-.23-.484s.025-.216.23-.484c.218-.286.558-.629 1.085-1.155l.131-.131a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiCodeDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeHexagonIcon],svg[mynaui-code-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.023 1.534 1.534 1.534 2.169s-.512 1.147-1.534 2.17l-.132.13M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.854 7.427 11.365 7.427 12s.51 1.147 1.533 2.17l.132.13"></svg:path></svg:g>`,
})
export class MynauiCodeHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeHexagonSolidIcon],svg[mynaui-code-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm3.117 6.09a.75.75 0 1 0-1.45-.39l-2.143 8a.75.75 0 0 0 1.449.39zm1.641.974a.75.75 0 1 0-1.06 1.06l.131.132c.527.526.867.869 1.085 1.155c.205.268.23.396.23.484s-.025.216-.23.484c-.218.286-.558.629-1.085 1.155l-.131.131a.75.75 0 0 0 1.06 1.061l.167-.167c.482-.48.895-.894 1.181-1.27c.307-.402.537-.846.537-1.394s-.23-.992-.537-1.394c-.286-.376-.7-.789-1.18-1.27zm-5.816 0a.75.75 0 0 0-1.06 0l-.167.167c-.481.48-.895.894-1.181 1.27c-.307.402-.537.846-.537 1.394s.23.992.537 1.394c.286.376.7.79 1.18 1.27l.168.167a.75.75 0 1 0 1.06-1.06l-.131-.132c-.527-.526-.867-.869-1.085-1.155c-.205-.268-.23-.396-.23-.484s.025-.216.23-.484c.218-.286.558-.629 1.085-1.155l.131-.131a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiCodeHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeOctagonIcon],svg[mynaui-code-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.023 1.534 1.534 1.534 2.169s-.512 1.147-1.534 2.17l-.132.13M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.854 7.427 11.365 7.427 12s.51 1.147 1.533 2.17l.132.13"></svg:path></svg:g>`,
})
export class MynauiCodeOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeOctagonSolidIcon],svg[mynaui-code-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m5.76 5.786a.75.75 0 1 0-1.45-.388l-2.143 8a.75.75 0 0 0 1.449.388zm1.641.975a.75.75 0 1 0-1.06 1.06l.131.132c.527.526.867.869 1.085 1.155c.205.268.23.396.23.484s-.025.216-.23.484c-.218.286-.558.629-1.085 1.155l-.131.131a.75.75 0 0 0 1.06 1.061l.167-.167c.482-.48.895-.894 1.181-1.27c.307-.402.537-.846.537-1.394s-.23-.992-.537-1.394c-.286-.376-.7-.789-1.18-1.27zm-5.816 0a.75.75 0 0 0-1.06 0l-.167.167c-.481.48-.895.894-1.181 1.27c-.307.402-.537.846-.537 1.394s.23.992.537 1.394c.286.376.7.79 1.18 1.27l.168.167a.75.75 0 1 0 1.06-1.06l-.131-.132c-.527-.526-.867-.869-1.085-1.155c-.205-.268-.23-.396-.23-.484s.025-.216.23-.484c.218-.286.558-.629 1.085-1.155l.131-.131a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiCodeOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeSolidIcon],svg[mynaui-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.56 7.444a.75.75 0 0 1 1.06 0l.23.23l.038.038c.862.862 1.563 1.563 2.04 2.19c.5.652.826 1.312.826 2.098s-.327 1.446-.825 2.099c-.478.626-1.179 1.327-2.04 2.189l-.27.268a.75.75 0 1 1-1.06-1.06l.23-.23c.91-.91 1.538-1.54 1.947-2.077c.397-.52.518-.863.518-1.189s-.121-.67-.518-1.189c-.41-.537-1.037-1.167-1.947-2.076l-.23-.23a.75.75 0 0 1 0-1.061M14.07 4.276a.75.75 0 0 1 .53.918l-3.75 14a.75.75 0 1 1-1.45-.388l3.752-14a.75.75 0 0 1 .918-.53M7.441 7.444a.75.75 0 0 1 0 1.06l-.23.23c-.91.91-1.537 1.54-1.947 2.077c-.397.52-.517.863-.517 1.189s.12.67.517 1.189c.41.537 1.037 1.167 1.947 2.076l.23.23a.75.75 0 0 1-1.06 1.061l-.269-.268c-.862-.862-1.563-1.563-2.04-2.19c-.499-.652-.825-1.312-.825-2.098s.326-1.446.824-2.099c.478-.626 1.179-1.327 2.041-2.189l.269-.268a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiCodeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeSquareIcon],svg[mynaui-code-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.022 1.534 1.534 1.534 2.169s-.512 1.146-1.534 2.169l-.132.132M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.853 7.427 11.365 7.427 12s.51 1.146 1.533 2.169l.132.132"></svg:path></svg:g>`,
})
export class MynauiCodeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeSquareSolidIcon],svg[mynaui-code-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m4.43 5.944a.75.75 0 1 0-1.45-.388l-2.143 8a.75.75 0 0 0 1.449.388zm1.641.975a.75.75 0 1 0-1.06 1.06l.131.132c.527.526.867.869 1.085 1.155c.205.268.23.396.23.484s-.025.216-.23.484c-.218.286-.558.629-1.085 1.155l-.131.131a.75.75 0 1 0 1.06 1.06l.167-.166c.482-.48.895-.894 1.181-1.27c.307-.402.537-.846.537-1.394s-.23-.992-.537-1.394c-.286-.376-.7-.79-1.18-1.27zm-5.816 0a.75.75 0 0 0-1.06 0l-.167.167c-.481.48-.895.894-1.181 1.27c-.307.402-.537.846-.537 1.394s.23.992.537 1.394c.286.376.7.79 1.18 1.27l.168.167a.75.75 0 0 0 1.06-1.06l-.131-.132c-.527-.526-.867-.869-1.085-1.155c-.205-.268-.23-.396-.23-.484s.025-.216.23-.484c.218-.286.558-.629 1.085-1.155l.131-.131a.75.75 0 0 0 0-1.061"></svg:path>`,
})
export class MynauiCodeSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeWavesIcon],svg[mynaui-code-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.022 1.534 1.534 1.534 2.169s-.512 1.146-1.534 2.169l-.132.132M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.853 7.427 11.365 7.427 12s.51 1.146 1.533 2.169l.132.132"></svg:path></svg:g>`,
})
export class MynauiCodeWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeWavesSolidIcon],svg[mynaui-code-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m3.232 6.12a.75.75 0 1 0-1.45-.39l-2.143 8a.75.75 0 0 0 1.449.39zm1.641.974a.75.75 0 1 0-1.06 1.06l.131.132c.527.526.867.869 1.085 1.155c.205.268.23.396.23.484s-.025.216-.23.484c-.218.286-.558.629-1.085 1.155l-.131.131a.75.75 0 1 0 1.06 1.06l.167-.166c.482-.48.895-.894 1.181-1.27c.307-.402.537-.846.537-1.394s-.23-.992-.537-1.394c-.286-.376-.7-.79-1.18-1.27zm-5.816 0a.75.75 0 0 0-1.06 0l-.167.167c-.481.48-.895.894-1.181 1.27c-.307.402-.537.846-.537 1.394s.23.992.537 1.394c.286.376.7.79 1.18 1.27l.168.167a.75.75 0 0 0 1.06-1.06l-.131-.132c-.527-.526-.867-.869-1.085-1.155c-.205-.268-.23-.396-.23-.484s.025-.216.23-.484c.218-.286.558-.629 1.085-1.155l.131-.131a.75.75 0 0 0 0-1.061"></svg:path>`,
})
export class MynauiCodeWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCoffeeIcon],svg[mynaui-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10h1.5a2.5 2.5 0 0 1 0 5H18m0-5c0-.53-.36-1-.923-1H4.923A.923.923 0 0 0 4 9.923V17a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2m0-5v5M16 3l-2 3m-1-3l-2 3m-1-3L8 6"></svg:path>`,
})
export class MynauiCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCoffeeSolidIcon],svg[mynaui-coffee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.624 3.416a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 0 0 1.248.832zm3 0a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 1 0 1.248.832zm3 0a.75.75 0 1 0-1.248-.832l-2 3a.75.75 0 1 0 1.248.832zM4.923 8.25c-.924 0-1.673.749-1.673 1.673V17A4.75 4.75 0 0 0 8 21.75h6A4.75 4.75 0 0 0 18.75 17v-1.25h.75a3.25 3.25 0 0 0 0-6.5h-.91c-.244-.556-.765-1-1.513-1z"></svg:path>`,
})
export class MynauiCoffeeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogIcon],svg[mynaui-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.11 3.9a1 1 0 0 1 .995-.9h1.79a1 1 0 0 1 .995.9l.033.333a8 8 0 0 1 2.209.915l.259-.212a1 1 0 0 1 1.34.067l1.266 1.266a1 1 0 0 1 .067 1.34l-.212.26c.409.676.72 1.419.915 2.208l.332.033a1 1 0 0 1 .901.995v1.79a1 1 0 0 1-.9.995l-.333.033a8 8 0 0 1-.915 2.209l.212.259a1 1 0 0 1-.067 1.34l-1.266 1.266a1 1 0 0 1-1.34.067l-.26-.212a8 8 0 0 1-2.208.915l-.033.332a1 1 0 0 1-.995.901h-1.79a1 1 0 0 1-.995-.9l-.033-.333a8 8 0 0 1-2.209-.915l-.259.212a1 1 0 0 1-1.34-.067L5.003 17.73a1 1 0 0 1-.067-1.34l.212-.26a8 8 0 0 1-.915-2.208L3.9 13.89a1 1 0 0 1-.9-.995v-1.79a1 1 0 0 1 .9-.995l.333-.033a8 8 0 0 1 .915-2.209l-.212-.259a1 1 0 0 1 .067-1.34L6.27 5.003a1 1 0 0 1 1.34-.067l.26.212a8 8 0 0 1 2.208-.915z"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path></svg:g>`,
})
export class MynauiCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogFourIcon],svg[mynaui-cog-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path><svg:path d="M10 4.89c0 1.435-1.802 2.534-3.074 1.792c-2.271-1.223-3.996 2.145-1.99 3.496c1.224.714 1.225 2.88 0 3.595c-2.163 1.311-.189 4.66 1.99 3.486c1.379-.804 3.075.512 3.075 1.956c0 2.411 3.98 2.349 3.98 0c0-1.471 1.67-2.775 3.074-1.956c2.24 1.207 4.168-2.312 1.99-3.486c-1.226-.715-1.225-2.89 0-3.604c2.163-1.311.19-4.66-1.99-3.487c-1.243.726-3.073-.363-3.074-1.792c0-2.56-3.98-2.48-3.98 0"></svg:path></svg:g>`,
})
export class MynauiCogFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogFourSolidIcon],svg[mynaui-cog-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.841 2.887c-.53-.447-1.21-.643-1.858-.637c-.647.007-1.32.217-1.845.662c-.54.458-.887 1.136-.887 1.977c0 .394-.256.808-.694 1.068c-.435.258-.907.28-1.253.078l-.022-.013c-.743-.4-1.5-.448-2.165-.204c-.648.238-1.144.726-1.45 1.29c-.602 1.113-.546 2.751.85 3.692l.041.026c.318.185.546.612.547 1.15c0 .537-.23.964-.547 1.149l-.01.007c-.72.436-1.134 1.075-1.258 1.773c-.12.679.04 1.362.364 1.92s.835 1.035 1.478 1.273c.66.244 1.416.217 2.15-.178l.022-.013c.384-.224.838-.179 1.252.106c.429.293.695.768.695 1.202c0 .834.354 1.497.905 1.935c.53.421 1.204.605 1.84.6s1.306-.199 1.831-.62c.544-.434.904-1.09.904-1.915c0-.456.267-.932.685-1.219c.402-.276.856-.325 1.261-.089l.023.012c.75.405 1.52.428 2.188.17c.648-.252 1.157-.747 1.474-1.314c.316-.566.472-1.257.343-1.933c-.132-.694-.556-1.322-1.29-1.722c-.313-.188-.539-.613-.539-1.15c0-.54.23-.968.547-1.153l.01-.007c.721-.437 1.135-1.075 1.259-1.773c.12-.679-.041-1.362-.365-1.92c-.323-.557-.835-1.035-1.477-1.273c-.66-.244-1.417-.217-2.15.178l-.023.013c-.327.19-.8.174-1.245-.088s-.7-.674-.701-1.058c0-.854-.341-1.541-.89-2.002M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path>`,
})
export class MynauiCogFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogOneIcon],svg[mynaui-cog-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiCogOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogOneSolidIcon],svg[mynaui-cog-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path>`,
})
export class MynauiCogOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogSolidIcon],svg[mynaui-cog-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.391 3.646a1.75 1.75 0 0 1 1.714-1.396h1.79a1.75 1.75 0 0 1 1.714 1.396a8.7 8.7 0 0 1 1.453.602a1.75 1.75 0 0 1 2.2.225l1.265 1.266a1.75 1.75 0 0 1 .225 2.199q.365.693.602 1.453a1.75 1.75 0 0 1 1.396 1.714v1.79a1.75 1.75 0 0 1-1.396 1.714q-.237.76-.602 1.453a1.75 1.75 0 0 1-.225 2.2l-1.266 1.265a1.75 1.75 0 0 1-2.199.225a8.7 8.7 0 0 1-1.453.602a1.75 1.75 0 0 1-1.714 1.396h-1.79a1.75 1.75 0 0 1-1.714-1.396a8.7 8.7 0 0 1-1.453-.602a1.75 1.75 0 0 1-2.2-.225l-1.265-1.266a1.75 1.75 0 0 1-.225-2.199a8.7 8.7 0 0 1-.602-1.453a1.75 1.75 0 0 1-1.396-1.714v-1.79a1.75 1.75 0 0 1 1.396-1.714a8.7 8.7 0 0 1 .602-1.453a1.75 1.75 0 0 1 .225-2.2l1.266-1.265a1.75 1.75 0 0 1 2.199-.225a8.7 8.7 0 0 1 1.453-.602M8.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0"></svg:path>`,
})
export class MynauiCogSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogThreeIcon],svg[mynaui-cog-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.4 18.235a7.2 7.2 0 0 0 7.2-12.47m-7.2 12.47A7.2 7.2 0 0 1 5.765 8.4M8.4 18.235l-.9 1.56m8.1-14.03A7.2 7.2 0 0 0 5.765 8.4M15.6 5.765l.9-1.56M5.765 8.4l-1.56-.9m10.295 6l5.294 3M12 21v-1.8M12 9V3m4.5 16.794l-.899-1.558m-8.1-14.03l.898 1.558M20.999 12h-1.798m-16.2 0h1.798m14.995-4.5l-1.558.899M9.5 13.5l-5.294 3"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path></svg:g>`,
})
export class MynauiCogThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogThreeSolidIcon],svg[mynaui-cog-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v1.085a8 8 0 0 1 2.558.686l.543-.94a.75.75 0 1 1 1.298.75l-.542.94a8 8 0 0 1 1.872 1.872l.94-.542a.75.75 0 0 1 .75 1.299l-.94.542a8 8 0 0 1 .686 2.558h1.084a.75.75 0 1 1 .001 1.5h-1.085a8 8 0 0 1-.69 2.566l.939.531a.75.75 0 1 1-.74 1.306l-.95-.539a8 8 0 0 1-1.867 1.865l.543.94a.75.75 0 1 1-1.3.75l-.542-.94a8 8 0 0 1-2.558.686v1.084a.75.75 0 1 1-1.5.001v-1.085a8 8 0 0 1-2.558-.686l-.542.94a.75.75 0 0 1-1.3-.75l.543-.94a8 8 0 0 1-1.867-1.865l-.95.538a.75.75 0 1 1-.74-1.305l.938-.531a8 8 0 0 1-.689-2.567l-1.084.001A.75.75 0 0 1 3 11.25h1.086a8 8 0 0 1 .685-2.558l-.94-.543a.75.75 0 1 1 .75-1.299l.94.543a8 8 0 0 1 1.872-1.872l-.542-.94a.75.75 0 0 1 1.299-.75l.542.94a8 8 0 0 1 2.558-.686V3a.75.75 0 0 1 .75-.75m-.75 3.344a6.45 6.45 0 0 0-5.165 8.979L8.9 12.978a3.25 3.25 0 0 1 2.35-4.141zm1.5 3.243a3.25 3.25 0 0 1 2.35 4.141l2.815 1.595a6.45 6.45 0 0 0-5.165-8.98zm4.41 7.033l-2.83-1.604a3.24 3.24 0 0 1-2.33.984a3.24 3.24 0 0 1-2.33-.984L6.84 15.87a6.45 6.45 0 0 0 10.32 0"></svg:path>`,
})
export class MynauiCogThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogTwoIcon],svg[mynaui-cog-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path></svg:g>`,
})
export class MynauiCogTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCogTwoSolidIcon],svg[mynaui-cog-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path>`,
})
export class MynauiCogTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiColumnsIcon],svg[mynaui-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-8 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class MynauiColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiColumnsSolidIcon],svg[mynaui-columns-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2.25A1.75 1.75 0 0 0 12.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 19.25 20V4a1.75 1.75 0 0 0-1.75-1.75zm-8 0A1.75 1.75 0 0 0 4.75 4v16c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 11.25 20V4A1.75 1.75 0 0 0 9.5 2.25z"></svg:path>`,
})
export class MynauiColumnsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCommandIcon],svg[mynaui-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.012 5.977v12.046c0 2.645 3.316 3.954 5.14 2.13c1.825-1.825.516-5.141-2.13-5.141H5.978c-2.645 0-3.953 3.316-2.13 5.14c1.825 1.825 5.142.516 5.142-2.13V5.978c0-2.645-3.317-3.953-5.141-2.13c-1.824 1.825-.516 5.142 2.13 5.142h12.045c2.645 0 3.954-3.317 2.13-5.141s-5.141-.516-5.141 2.13"></svg:path>`,
})
export class MynauiCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCommandSolidIcon],svg[mynaui-command-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.261 5.977c0-3.33 4.137-4.944 6.422-2.66c2.284 2.285.67 6.422-2.66 6.422H15.76v4.522h2.262c3.33 0 4.944 4.137 2.66 6.422c-2.285 2.284-6.422.67-6.422-2.66v-2.261H9.738v2.26c0 3.331-4.136 4.945-6.42 2.66c-2.285-2.284-.671-6.42 2.659-6.42h2.261V9.739H5.977c-3.33 0-4.944-4.137-2.66-6.422c2.285-2.284 6.421-.67 6.421 2.66V8.24h4.523zm0 3.762H9.738v4.522h4.523z"></svg:path>`,
})
export class MynauiCommandSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCompassIcon],svg[mynaui-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="m9 15l1.5-4.5L15 9l-1.5 4.5z"></svg:path></svg:g>`,
})
export class MynauiCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCompassSolidIcon],svg[mynaui-compass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m10.186 13.814l.907-2.721l2.721-.907l-.907 2.721z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.462-2.763a.75.75 0 0 0-.95-.949l-4.5 1.5a.75.75 0 0 0-.473.475l-1.5 4.5a.75.75 0 0 0 .948.948l4.5-1.5a.75.75 0 0 0 .474-.474z"></svg:path></svg:g>`,
})
export class MynauiCompassSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiComponentsIcon],svg[mynaui-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.85 6.15L12 3l3.15 3.15L12 9.3zm5.85 6.3l3.15-3.15L21 12.45l-3.15 3.15zm-5.85 5.4L12 14.7l3.15 3.15L12 21zM3 12l3.15-3.15L9.3 12l-3.15 3.15z"></svg:path>`,
})
export class MynauiComponentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiComponentsSolidIcon],svg[mynaui-components-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 2.47a.75.75 0 0 0-1.06 0L8.32 5.62a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06zm5.85 6.3a.75.75 0 0 0-1.06 0l-3.15 3.15a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06zm-5.85 5.4a.75.75 0 0 0-1.06 0l-3.15 3.15a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06zM6.68 8.32a.75.75 0 0 0-1.06 0l-3.15 3.15a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiComponentsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiConfettiIcon],svg[mynaui-confetti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.675 20.971a.508.508 0 0 1-.65-.637L5.615 9.21c.12-.374.6-.475.862-.183l7.756 7.544a.51.51 0 0 1-.212.82zm7.219-11.695L13.3 6.66q1.925-2.091.48-3.66M8 5.25v-.5m12-.25V4m0 9.5V13m-2 5.5V18m-4.219-5.586l2.406-2.615q2.407-2.616 4.813 0"></svg:path>`,
})
export class MynauiConfettiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiConfettiSolidIcon],svg[mynaui-confetti-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.273 2.448a.75.75 0 0 1 1.06.044c.606.658.907 1.44.793 2.305c-.108.826-.58 1.618-1.274 2.372l-2.406 2.615a.75.75 0 1 1-1.104-1.016l2.406-2.615c.59-.64.84-1.157.891-1.551c.047-.354-.053-.706-.41-1.094a.75.75 0 0 1 .044-1.06M8 4a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0v-.5A.75.75 0 0 1 8 4m12-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m0 9a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V13a.75.75 0 0 1 .75-.75m-2 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75m.594-8.009c-.51 0-1.126.274-1.855 1.066l-2.406 2.614a.75.75 0 1 1-1.104-1.015l2.407-2.615c.876-.952 1.863-1.55 2.958-1.55s2.082.598 2.958 1.55a.75.75 0 0 1-1.104 1.016c-.728-.792-1.345-1.066-1.854-1.066M4.901 8.98a1.258 1.258 0 0 1 2.114-.477l7.741 7.53l.036.037c.6.67.325 1.735-.526 2.03L3.92 21.68c-.97.336-1.904-.567-1.62-1.54l2.585-11.1q.006-.03.016-.06"></svg:path>`,
})
export class MynauiConfettiSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiConfigIcon],svg[mynaui-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5h-3m-4.25-2v4M13 5H3m4 7H3m7.75-2v4M21 12H11m10 7h-3m-4.25-2v4M13 19H3"></svg:path>`,
})
export class MynauiConfigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiConfigSolidIcon],svg[mynaui-config-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2.25a.75.75 0 0 1 .75.75v4A.75.75 0 0 1 13 7V5.75H3a.75.75 0 0 1 0-1.5h10V3a.75.75 0 0 1 .75-.75M17.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-6.5 4.25a.75.75 0 0 1 .75.75v1.25H21a.75.75 0 0 1 0 1.5h-9.5V14a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M2.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.5 4.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-1.25H3a.75.75 0 0 1 0-1.5h10V17a.75.75 0 0 1 .75-.75m3.5 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiConfigSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiConfigVerticalIcon],svg[mynaui-config-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v3m-2 4.25h4M5 11v10m7-4v4m-2-7.75h4M12 3v10m7-10v3m-2 4.25h4M19 11v10"></svg:path>`,
})
export class MynauiConfigVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiConfigVerticalSolidIcon],svg[mynaui-config-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-7 0a.75.75 0 0 1 .75.75v9.5H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25V3a.75.75 0 0 1 .75-.75m-7 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 5 2.25m-2.75 8A.75.75 0 0 1 3 9.5h4A.75.75 0 0 1 7 11H5.75v10a.75.75 0 0 1-1.5 0V11H3a.75.75 0 0 1-.75-.75m14 0A.75.75 0 0 1 17 9.5h4a.75.75 0 0 1 0 1.5h-1.25v10a.75.75 0 0 1-1.5 0V11H17a.75.75 0 0 1-.75-.75m-4.25 6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiConfigVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiContactlessIcon],svg[mynaui-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.46 21c1.32-2.76 2.04-5.76 2.04-9s-.72-6.36-2.04-9m-4.32 15.96C14.1 16.8 14.7 14.4 14.7 12s-.6-4.92-1.56-7.08m-4.32 12C9.54 15.36 9.9 13.68 9.9 12s-.36-3.48-1.08-4.92M4.5 14.76c.36-.84.6-1.8.6-2.76s-.24-2.04-.6-2.88"></svg:path>`,
})
export class MynauiContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiContactlessCircleIcon],svg[mynaui-contactless-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 9.99a9 9 0 0 1 0 4.02m2.975-5.59a13 13 0 0 1 .5 3.58a13 13 0 0 1-.5 3.58m3.25-8.72c.513 1.621.79 3.348.79 5.14s-.277 3.519-.79 5.14"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiContactlessCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiContactlessCircleSolidIcon],svg[mynaui-contactless-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m12.69-5.367a.75.75 0 0 0-1.43.453c.49 1.55.755 3.2.755 4.914s-.265 3.365-.756 4.914a.75.75 0 0 0 1.43.453c.537-1.694.826-3.498.826-5.367c0-1.87-.289-3.673-.826-5.367m-3.244 1.581a.75.75 0 1 0-1.442.412c.306 1.071.47 2.203.47 3.374c0 1.17-.164 2.302-.47 3.373a.75.75 0 1 0 1.442.412c.344-1.203.528-2.473.528-3.785s-.184-2.582-.528-3.786M7.833 9.258a.75.75 0 0 0-.564.899a8.3 8.3 0 0 1 0 3.687a.75.75 0 0 0 1.462.333a9.8 9.8 0 0 0 0-4.354a.75.75 0 0 0-.898-.565"></svg:path>`,
})
export class MynauiContactlessCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiContactlessSolidIcon],svg[mynaui-contactless-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.125 2.33a.75.75 0 0 1 1.006.335C19.506 5.415 20.25 8.652 20.25 12c0 3.355-.746 6.465-2.113 9.324a.75.75 0 1 1-1.354-.648A19.9 19.9 0 0 0 18.75 12c0-3.132-.697-6.136-1.96-8.665a.75.75 0 0 1 .335-1.006m-4.29 1.905a.75.75 0 0 1 .99.38C14.823 6.86 15.45 9.483 15.45 12c0 2.522-.63 5.026-1.625 7.265a.75.75 0 1 1-1.37-.61c.925-2.08 1.495-4.377 1.495-6.655c0-2.283-.573-4.7-1.495-6.775a.75.75 0 0 1 .38-.99m-4.35 2.174a.75.75 0 0 1 1.006.335c.781 1.563 1.16 3.482 1.16 5.256a12.5 12.5 0 0 1-1.15 5.234a.75.75 0 0 1-1.362-.628A11 11 0 0 0 9.15 12c0-1.586-.342-3.267-1-4.585a.75.75 0 0 1 .335-1.006m-4.28 2.022a.75.75 0 0 1 .984.394c.398.927.66 2.107.66 3.175c0 1.08-.268 2.142-.66 3.056a.75.75 0 1 1-1.378-.591c.328-.766.539-1.626.539-2.465c0-.852-.217-1.832-.54-2.584a.75.75 0 0 1 .395-.985"></svg:path>`,
})
export class MynauiContactlessSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiControllerIcon],svg[mynaui-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 11.5v3M6 13h3m3-4.653c2.005 0 3.7-1.888 5.786-1.212c2.264.733 3.82 3.413 3.708 9.492c-.022 1.224-.336 2.578-1.546 3.106c-2.797 1.221-4.397-2.328-7-2.328h-1.897c-2.605 0-4.213 3.545-6.998 2.328c-1.21-.528-1.525-1.882-1.547-3.107c-.113-6.078 1.444-8.758 3.708-9.491C8.299 6.459 9.994 8.347 12 8.347m0-4.565v4.342M14.874 13h3"></svg:path>`,
})
export class MynauiControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiControllerSolidIcon],svg[mynaui-controller-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.032a.75.75 0 0 1 .75.75v3.715c.428-.109.867-.296 1.371-.51q.219-.094.455-.192c.952-.395 2.122-.801 3.441-.374c1.37.444 2.474 1.472 3.203 3.157c.718 1.66 1.081 3.97 1.024 7.062c-.023 1.255-.34 3.057-1.996 3.78c-1.789.782-3.198-.024-4.296-.774q-.253-.174-.483-.337c-.376-.265-.72-.507-1.089-.714c-.499-.28-.957-.44-1.431-.44H11.05c-.475 0-.935.16-1.435.44c-.37.207-.716.45-1.094.716q-.229.162-.48.334c-1.097.748-2.506 1.555-4.29.776c-1.656-.724-1.973-2.526-1.996-3.78c-.057-3.093.306-5.403 1.024-7.063c.73-1.685 1.833-2.713 3.203-3.157c1.32-.427 2.489-.02 3.441.374q.237.098.455.192c.504.214.943.401 1.371.51V3.782a.75.75 0 0 1 .75-.75M8.25 11.5a.75.75 0 0 0-1.5 0v.75H6a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75H9a.75.75 0 0 0 0-1.5h-.75zm6.624.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiControllerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCookieIcon],svg[mynaui-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.003 21a9.003 9.003 0 0 0 8.996-8.658c.006-.153-.16-.25-.298-.181c-2.476 1.247-4.006-.077-3.757-1.854a.23.23 0 0 0-.252-.257c-2.171.303-3.086-1.014-2.744-2.804a.225.225 0 0 0-.201-.261c-2.043-.182-2.212-2.54-1.861-3.69c.043-.142-.059-.3-.207-.295a9.003 9.003 0 0 0 .324 18M15 16.354l.354-.354M10 17.354l.354-.354M8 8.354L8.353 8M7 13.354L7.353 13M12 12.354l.354-.354"></svg:path>`,
})
export class MynauiCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCookieSolidIcon],svg[mynaui-cookie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.652 2.25c.759-.026 1.116.724.951 1.264a3.14 3.14 0 0 0 .027 1.75c.182.544.526.915 1.183.973c.554.05.983.569.872 1.15c-.145.758.004 1.267.254 1.548c.236.266.718.502 1.649.372c.66-.092 1.185.488 1.098 1.104c-.091.655.15 1.103.501 1.314c.363.219 1.075.321 2.177-.234c.592-.298 1.414.095 1.385.88c-.197 5.213-4.485 9.379-9.746 9.379a9.75 9.75 0 0 1-9.753-9.753c0-5.269 4.178-9.561 9.402-9.746M8.884 8.53a.75.75 0 1 0-1.06-1.06l-.354.353a.75.75 0 0 0 1.06 1.06zm4 4a.75.75 0 1 0-1.06-1.06l-.354.353a.75.75 0 0 0 1.06 1.06zm-5 1a.75.75 0 1 0-1.06-1.06l-.354.353a.75.75 0 0 0 1.06 1.06zm8 3a.75.75 0 1 0-1.06-1.06l-.354.353a.75.75 0 0 0 1.06 1.06zm-5 1a.75.75 0 1 0-1.06-1.06l-.354.353a.75.75 0 0 0 1.06 1.06z"></svg:path>`,
})
export class MynauiCookieSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyIcon],svg[mynaui-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.829 12.861c.171-.413.171-.938.171-1.986s0-1.573-.171-1.986a2.25 2.25 0 0 0-1.218-1.218c-.413-.171-.938-.171-1.986-.171H11.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C7.5 9.209 7.5 9.839 7.5 11.1v6.525c0 1.048 0 1.573.171 1.986c.229.551.667.99 1.218 1.218c.413.171.938.171 1.986.171s1.573 0 1.986-.171m7.968-7.968a2.25 2.25 0 0 1-1.218 1.218c-.413.171-.938.171-1.986.171s-1.573 0-1.986.171a2.25 2.25 0 0 0-1.218 1.218c-.171.413-.171.938-.171 1.986s0 1.573-.171 1.986a2.25 2.25 0 0 1-1.218 1.218m7.968-7.968a11.68 11.68 0 0 1-7.75 7.9l-.218.068M16.5 7.5v-.9c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.983-.984C14.79 3 14.16 3 12.9 3H6.6c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C3 4.709 3 5.339 3 6.6v6.3c0 1.26 0 1.89.245 2.371c.216.424.56.768.984.984c.48.245 1.111.245 2.372.245H7.5"></svg:path>`,
})
export class MynauiCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopySolidIcon],svg[mynaui-copy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.569 2.25h6.362c.604 0 1.102 0 1.508.033c.421.035.809.109 1.173.294a3 3 0 0 1 1.311 1.311c.186.364.26.752.294 1.173c.033.406.033.904.033 1.508v.181h.4c.503 0 .918 0 1.257.023c.352.024.678.076.991.205a3 3 0 0 1 1.624 1.624c.13.313.18.639.205.99c.023.34.023.755.023 1.257v.052c0 .502 0 .917-.023 1.256a3.2 3.2 0 0 1-.189.95a12.43 12.43 0 0 1-8.236 8.37l-.189.059a3.1 3.1 0 0 1-.956.19c-.34.024-.754.024-1.256.024h-.052c-.502 0-.917 0-1.256-.023c-.352-.024-.678-.076-.991-.205a3 3 0 0 1-1.624-1.624c-.13-.313-.18-.639-.205-.99c-.023-.34-.023-.755-.023-1.257v-.401h-.18c-.604 0-1.103 0-1.509-.033c-.421-.035-.809-.108-1.173-.294a3 3 0 0 1-1.311-1.311c-.185-.364-.26-.752-.294-1.173c-.033-.406-.033-.904-.033-1.508V6.569c0-.604 0-1.102.033-1.508c.035-.421.109-.809.294-1.173a3 3 0 0 1 1.311-1.311c.364-.185.752-.26 1.173-.294c.406-.033.904-.033 1.508-.033M8.25 17.625c0 .534 0 .898.02 1.18c.018.276.053.419.094.519a1.5 1.5 0 0 0 .812.812c.1.041.243.076.519.094c.282.02.646.02 1.18.02s.898 0 1.18-.02c.276-.018.419-.053.519-.094a1.5 1.5 0 0 0 .812-.812c.041-.1.075-.243.094-.519c.02-.282.02-.646.02-1.18v-.026c0-.502 0-.917.023-1.256c.024-.352.076-.678.205-.991a3 3 0 0 1 1.624-1.624c.313-.13.639-.18.99-.205c.34-.023.755-.023 1.257-.023h.026c.534 0 .898 0 1.18-.02c.276-.019.419-.053.519-.094a1.5 1.5 0 0 0 .812-.812c.041-.1.076-.243.094-.519c.02-.282.02-.646.02-1.18s0-.898-.02-1.18c-.018-.276-.053-.419-.094-.519a1.5 1.5 0 0 0-.812-.812c-.1-.041-.243-.076-.519-.094c-.282-.02-.646-.02-1.18-.02H11.1c-.642 0-1.08 0-1.417.028c-.329.027-.497.076-.614.135a1.5 1.5 0 0 0-.656.656c-.06.117-.108.285-.135.614c-.027.338-.028.775-.028 1.417z"></svg:path>`,
})
export class MynauiCopySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyleftIcon],svg[mynaui-copyleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9.75 9c.48-.6 1.07-1 2-1c4.172 0 4.172 8 0 8c-.93 0-1.52-.4-2-1"></svg:path></svg:g>`,
})
export class MynauiCopyleftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyleftSolidIcon],svg[mynaui-copyleft-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.085-2.53c.373-.466.763-.72 1.415-.72c.766 0 1.33.353 1.73.928c.416.598.649 1.44.649 2.322s-.233 1.724-.648 2.322c-.4.575-.965.928-1.731.928c-.652 0-1.042-.254-1.415-.72a.75.75 0 1 0-1.17.94c.587.732 1.377 1.28 2.585 1.28c1.32 0 2.32-.647 2.962-1.572c.627-.902.917-2.06.917-3.178s-.29-2.276-.917-3.178C14.07 7.897 13.07 7.25 11.75 7.25c-1.208 0-1.998.548-2.585 1.28a.75.75 0 0 0 1.17.94"></svg:path>`,
})
export class MynauiCopyleftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyrightIcon],svg[mynaui-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M14 9c-.48-.6-1.07-1-2-1c-4.172 0-4.172 8 0 8c.93 0 1.52-.4 2-1"></svg:path></svg:g>`,
})
export class MynauiCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyrightSlashIcon],svg[mynaui-copyright-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3 21l2.636-2.636M21 3l-2.636 2.636m0 0A9 9 0 1 1 5.636 18.364M18.364 5.636L5.636 18.364m-2.02-3.087A9 9 0 0 1 15.277 3.615"></svg:path><svg:path d="M14 9c-.48-.6-1.07-1-2-1c-4.172 0-4.172 8 0 8c.93 0 1.52-.4 2-1"></svg:path></svg:g>`,
})
export class MynauiCopyrightSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyrightSlashSolidIcon],svg[mynaui-copyright-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12A9.75 9.75 0 0 1 12 2.25a9.7 9.7 0 0 1 6.344 2.346L20.47 2.47a.75.75 0 1 1 1.06 1.06l-2.126 2.126A9.7 9.7 0 0 1 21.75 12A9.75 9.75 0 0 1 12 21.75a9.7 9.7 0 0 1-6.344-2.346L3.53 21.53a.75.75 0 0 1-1.06-1.06l2.126-2.126A9.7 9.7 0 0 1 2.25 12M12 7.25c-1.32 0-2.32.647-2.962 1.572c-.628.902-.917 2.06-.917 3.178c0 .8.149 1.622.463 2.355l1.18-1.18A4.8 4.8 0 0 1 9.622 12c0-.883.233-1.724.648-2.322c.4-.575.965-.928 1.73-.928c.652 0 1.043.254 1.416.72l.025.03l1.065-1.066C13.927 7.75 13.155 7.25 12 7.25m2.585 8.22a.75.75 0 0 0-1.17-.94c-.373.466-.763.72-1.415.72a1.98 1.98 0 0 1-1.523-.666l-1.061 1.06A3.47 3.47 0 0 0 12 16.75c1.208 0 1.998-.548 2.585-1.28"></svg:path>`,
})
export class MynauiCopyrightSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCopyrightSolidIcon],svg[mynaui-copyright-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.25c-1.32 0-2.32.647-2.962 1.572c-.628.902-.917 2.06-.917 3.178s.29 2.276.917 3.178c.643.925 1.642 1.572 2.962 1.572c1.208 0 1.998-.548 2.585-1.28a.75.75 0 0 0-1.17-.94c-.373.466-.763.72-1.415.72c-.766 0-1.33-.353-1.73-.928c-.416-.598-.649-1.44-.649-2.322s.233-1.724.648-2.322c.4-.575.965-.928 1.73-.928c.652 0 1.043.254 1.416.72a.75.75 0 0 0 1.17-.94c-.587-.732-1.377-1.28-2.585-1.28"></svg:path>`,
})
export class MynauiCopyrightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerDownLeftIcon],svg[mynaui-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13.973h10a4 4 0 0 0 4-4V5M5 13.973l4.78-5.027M5 13.973L9.78 19"></svg:path>`,
})
export class MynauiCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerDownLeftSolidIcon],svg[mynaui-corner-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.237 19.517a.75.75 0 0 0 1.06.027v-4.821H15a4.75 4.75 0 0 0 4.75-4.75V5a.75.75 0 0 0-1.5 0v4.973a3.25 3.25 0 0 1-3.25 3.25h-4.703V8.402a.75.75 0 0 0-1.06.027l-4.78 5.027a.75.75 0 0 0 0 1.034z"></svg:path>`,
})
export class MynauiCornerDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerDownRightIcon],svg[mynaui-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 13.973H9a4 4 0 0 1-4-4V5m14 8.973l-4.78-5.027M19 13.973L14.22 19"></svg:path>`,
})
export class MynauiCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerDownRightSolidIcon],svg[mynaui-corner-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.763 19.517a.75.75 0 0 1-1.06.027v-4.821H9a4.75 4.75 0 0 1-4.75-4.75V5a.75.75 0 0 1 1.5 0v4.973A3.25 3.25 0 0 0 9 13.223h4.703V8.402a.75.75 0 0 1 1.06.027l4.78 5.027a.75.75 0 0 1 0 1.034z"></svg:path>`,
})
export class MynauiCornerDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftDownIcon],svg[mynaui-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.027 19V9a4 4 0 0 1 4-4H19m-8.973 14l5.028-4.78M10.027 19L5 14.22"></svg:path>`,
})
export class MynauiCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftDownSolidIcon],svg[mynaui-corner-left-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.483 14.763a.75.75 0 0 1-.026-1.06h4.82V9a4.75 4.75 0 0 1 4.75-4.75H19a.75.75 0 0 1 0 1.5h-4.973A3.25 3.25 0 0 0 10.777 9v4.703h4.821a.75.75 0 0 1-.027 1.06l-5.027 4.78a.75.75 0 0 1-1.034 0z"></svg:path>`,
})
export class MynauiCornerLeftDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftUpIcon],svg[mynaui-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.027 5v10a4 4 0 0 0 4 4H19M10.027 5l5.028 4.78M10.027 5L5 9.78"></svg:path>`,
})
export class MynauiCornerLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftUpSolidIcon],svg[mynaui-corner-left-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.483 9.237a.75.75 0 0 0-.026 1.06h4.82V15a4.75 4.75 0 0 0 4.75 4.75H19a.75.75 0 0 0 0-1.5h-4.973a3.25 3.25 0 0 1-3.25-3.25v-4.703h4.821a.75.75 0 0 0-.027-1.06l-5.027-4.78a.75.75 0 0 0-1.034 0z"></svg:path>`,
})
export class MynauiCornerLeftUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerRightDownIcon],svg[mynaui-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.973 19V9a4 4 0 0 0-4-4H5m8.973 14l-5.027-4.78M13.973 19L19 14.22"></svg:path>`,
})
export class MynauiCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerRightDownSolidIcon],svg[mynaui-corner-right-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.517 14.763a.75.75 0 0 0 .027-1.06h-4.821V9a4.75 4.75 0 0 0-4.75-4.75H5a.75.75 0 0 0 0 1.5h4.973A3.25 3.25 0 0 1 13.223 9v4.703H8.402a.75.75 0 0 0 .027 1.06l5.027 4.78a.75.75 0 0 0 1.034 0z"></svg:path>`,
})
export class MynauiCornerRightDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerRightUpIcon],svg[mynaui-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.973 5v10a4 4 0 0 1-4 4H5m8.973-14L8.946 9.78M13.973 5L19 9.78"></svg:path>`,
})
export class MynauiCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerRightUpSolidIcon],svg[mynaui-corner-right-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.517 9.237c.3.285.312.76.027 1.06h-4.821V15a4.75 4.75 0 0 1-4.75 4.75H5a.75.75 0 0 1 0-1.5h4.973a3.25 3.25 0 0 0 3.25-3.25v-4.703H8.402a.75.75 0 0 1 .027-1.06l5.027-4.78a.75.75 0 0 1 1.034 0z"></svg:path>`,
})
export class MynauiCornerRightUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerUpLeftIcon],svg[mynaui-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10.027h10a4 4 0 0 1 4 4V19M5 10.027l4.78 5.028M5 10.027L9.78 5"></svg:path>`,
})
export class MynauiCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerUpLeftSolidIcon],svg[mynaui-corner-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.237 4.483a.75.75 0 0 1 1.06-.026v4.82H15a4.75 4.75 0 0 1 4.75 4.75V19a.75.75 0 0 1-1.5 0v-4.973a3.25 3.25 0 0 0-3.25-3.25h-4.703v4.821a.75.75 0 0 1-1.06-.027l-4.78-5.027a.75.75 0 0 1 0-1.034z"></svg:path>`,
})
export class MynauiCornerUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerUpRightIcon],svg[mynaui-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 10.027H9a4 4 0 0 0-4 4V19m14-8.973l-4.78 5.028M19 10.027L14.22 5"></svg:path>`,
})
export class MynauiCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerUpRightSolidIcon],svg[mynaui-corner-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.763 4.483a.75.75 0 0 0-1.06-.026v4.82H9a4.75 4.75 0 0 0-4.75 4.75V19a.75.75 0 0 0 1.5 0v-4.973A3.25 3.25 0 0 1 9 10.777h4.703v4.821a.75.75 0 0 0 1.06-.027l4.78-5.027a.75.75 0 0 0 0-1.034z"></svg:path>`,
})
export class MynauiCornerUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardIcon],svg[mynaui-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V9M3 9h18M3 9v6.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9M6 15h4"></svg:path>`,
})
export class MynauiCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardCheckIcon],svg[mynaui-credit-card-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h6.3M3 9h9.5M3 9v6.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11m-5-3.678l1.484 1.576a.337.337 0 0 0 .502-.022L21 5M6 15h4"></svg:path>`,
})
export class MynauiCreditCardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardCheckSolidIcon],svg[mynaui-credit-card-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.46 4.408a.75.75 0 0 1 .132 1.052L18.58 9.337a1.087 1.087 0 0 1-1.64.075l-1.485-1.575a.75.75 0 1 1 1.092-1.029l1.15 1.22l2.712-3.488a.75.75 0 0 1 1.052-.132"></svg:path><svg:path d="M6.17 4.25h6.33a.75.75 0 0 1 0 1.5H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.515.111c-.235.12-.426.311-.546.546c-.046.09-.088.228-.111.515c-.024.296-.025.68-.025 1.253v.05h8.75a.75.75 0 0 1 0 1.5H3.75v6.05c0 .573 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.312.427.546.547c.09.046.228.088.515.111c.295.024.679.025 1.25.025h11.606c.571 0 .955 0 1.25-.025c.287-.023.424-.065.514-.111c.235-.12.427-.312.547-.547c.046-.09.088-.227.111-.514c.024-.295.025-.678.025-1.25V11a.75.75 0 0 1 1.5 0v4.834c0 .533 0 .978-.03 1.342c-.03.38-.098.735-.27 1.072a2.75 2.75 0 0 1-1.202 1.203c-.337.171-.693.238-1.073.27c-.363.029-.808.029-1.341.029H6.166c-.533 0-.978 0-1.342-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.201-1.202c-.172-.337-.24-.693-.27-1.073c-.03-.364-.03-.81-.03-1.344V8.17c0-.534 0-.98.03-1.345c.03-.38.098-.736.27-1.074a2.75 2.75 0 0 1 1.2-1.201c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03"></svg:path><svg:path d="M5.25 15c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0-.75.75"></svg:path></svg:g>`,
})
export class MynauiCreditCardCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardMinusIcon],svg[mynaui-credit-card-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9v6.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h6.3M3 9h9.5M6 15h4m5.5-7.5h5"></svg:path>`,
})
export class MynauiCreditCardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardMinusSolidIcon],svg[mynaui-credit-card-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 4.25h6.33a.75.75 0 0 1 0 1.5H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.515.111c-.235.12-.426.311-.546.546c-.046.09-.088.228-.111.515c-.024.296-.025.68-.025 1.253v.05h8.75a.75.75 0 0 1 0 1.5H3.75v6.05c0 .573 0 .957.025 1.253c.023.287.065.424.111.514c.12.236.312.427.546.547c.09.046.228.088.515.111c.295.024.679.025 1.25.025h11.606c.571 0 .955 0 1.25-.025c.287-.023.424-.065.514-.111c.235-.12.427-.312.547-.547c.046-.09.088-.227.111-.514c.024-.295.025-.678.025-1.25V11a.75.75 0 0 1 1.5 0v4.834c0 .533 0 .978-.03 1.342c-.03.38-.098.735-.27 1.072a2.75 2.75 0 0 1-1.202 1.203c-.337.171-.693.238-1.073.27c-.363.029-.808.029-1.341.029H6.166c-.533 0-.978 0-1.342-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.201-1.202c-.172-.337-.24-.693-.27-1.073c-.03-.364-.03-.81-.03-1.344V8.17c0-.534 0-.98.03-1.345c.03-.38.098-.736.27-1.074a2.75 2.75 0 0 1 1.2-1.201c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03m8.58 3.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M5.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiCreditCardMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardPlusIcon],svg[mynaui-credit-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9v6.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h6.3M3 9h9.5M6 15h4m5.5-7.5h5M18 5v5"></svg:path>`,
})
export class MynauiCreditCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardPlusSolidIcon],svg[mynaui-credit-card-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 4.25h6.33a.75.75 0 0 1 0 1.5H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.515.111c-.235.12-.426.311-.546.546c-.046.09-.088.228-.111.515c-.024.296-.025.68-.025 1.253v.05h8.75a.75.75 0 0 1 0 1.5H3.75v6.05c0 .573 0 .957.025 1.253c.023.287.065.424.111.514c.12.236.312.427.546.547c.09.046.228.088.515.111c.295.024.679.025 1.25.025h11.606c.571 0 .955 0 1.25-.025c.287-.023.424-.065.514-.111c.235-.12.427-.312.547-.547c.046-.09.088-.227.111-.514c.024-.295.025-.678.025-1.25V11a.75.75 0 0 1 1.5 0v4.834c0 .533 0 .978-.03 1.342c-.03.38-.098.735-.27 1.072a2.75 2.75 0 0 1-1.202 1.203c-.337.171-.693.238-1.073.27c-.363.029-.808.029-1.341.029H6.166c-.533 0-.978 0-1.342-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.201-1.202c-.172-.337-.24-.693-.27-1.073c-.03-.364-.03-.81-.03-1.344V8.17c0-.534 0-.98.03-1.345c.03-.38.098-.736.27-1.074a2.75 2.75 0 0 1 1.2-1.201c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03m11.83 0a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V10a.75.75 0 0 1-1.5 0V8.25H15.5a.75.75 0 0 1 0-1.5h1.75V5a.75.75 0 0 1 .75-.75M5.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiCreditCardPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardSolidIcon],svg[mynaui-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.83 4.25H6.17c-.534 0-.98 0-1.345.03c-.38.03-.736.098-1.074.27a2.75 2.75 0 0 0-1.201 1.2c-.172.338-.24.694-.27 1.074c-.03.365-.03.81-.03 1.345v7.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.201 1.203c.337.171.694.238 1.073.27c.364.029.81.029 1.342.029h11.668c.533 0 .978 0 1.341-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.203-1.202c.171-.337.238-.693.27-1.072c.029-.364.029-.809.029-1.342V8.166c0-.533 0-.978-.03-1.342c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.202-1.201c-.337-.172-.694-.24-1.074-.27c-.363-.03-.81-.03-1.343-.03M4.433 5.886c.09-.046.228-.088.515-.111c.296-.024.68-.025 1.253-.025h11.6c.573 0 .957 0 1.252.025c.287.023.424.065.515.111c.236.12.427.312.547.546c.046.09.088.228.111.515c.024.295.025.679.025 1.25v.053H3.75V8.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515c.12-.235.311-.426.546-.546M6 14.25h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiCreditCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardXIcon],svg[mynaui-credit-card-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h6.3M3 9h9.5M3 9v6.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M6 15h4m6.5-10l4 4m0-4l-4 4"></svg:path>`,
})
export class MynauiCreditCardXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCreditCardXSolidIcon],svg[mynaui-credit-card-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 4.25h6.33a.75.75 0 0 1 0 1.5H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.515.111c-.235.12-.426.311-.546.546c-.046.09-.088.228-.111.515c-.024.296-.025.68-.025 1.253v.05h8.75a.75.75 0 0 1 0 1.5H3.75v6.05c0 .573 0 .957.025 1.253c.023.287.065.424.111.514c.12.236.312.427.546.547c.09.046.228.088.515.111c.295.024.679.025 1.25.025h11.606c.571 0 .955 0 1.25-.025c.287-.023.424-.065.514-.111c.235-.12.427-.312.547-.547c.046-.09.088-.227.111-.514c.024-.295.025-.678.025-1.25V11a.75.75 0 0 1 1.5 0v4.834c0 .533 0 .978-.03 1.342c-.03.38-.098.735-.27 1.072a2.75 2.75 0 0 1-1.202 1.203c-.337.171-.693.238-1.073.27c-.363.029-.808.029-1.341.029H6.166c-.533 0-.978 0-1.342-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.201-1.202c-.172-.337-.24-.693-.27-1.073c-.03-.364-.03-.81-.03-1.344V8.17c0-.534 0-.98.03-1.345c.03-.38.098-.736.27-1.074a2.75 2.75 0 0 1 1.2-1.201c.338-.172.694-.24 1.074-.27c.365-.03.81-.03 1.345-.03m9.8.22a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L19.56 7l1.47 1.47a.75.75 0 0 1-1.06 1.06L18.5 8.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L17.44 7l-1.47-1.47a.75.75 0 0 1 0-1.06M5.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiCreditCardXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCroissantIcon],svg[mynaui-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.803 9.997L9.75 7.69C9.48 7.032 9.12 6.6 8.4 6.6m0 0H5.25C3.711 6.6 3 7.05 3 8.85c.075 1.614.827 3.266 1.915 4.462M8.4 6.6c0-1.395.216-3.6-1.8-3.6c-1.8 0-2.25 2.029-2.25 3.676M14 13.21l2.311 1.04c.657.27 1.089.63 1.089 1.35m0 0v3.15c0 1.539-.45 2.25-2.25 2.25c-1.614-.076-3.264-.824-4.459-1.912M17.4 15.6c1.395 0 3.6-.216 3.6 1.8c0 1.8-2.029 2.25-3.676 2.25M5.34 13l5.211-2.89c1.701-.945 4.311 1.602 3.339 3.34l-2.898 5.228C9.12 22.044 1.911 14.908 5.34 13"></svg:path>`,
})
export class MynauiCroissantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCroissantSolidIcon],svg[mynaui-croissant-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.046 2.737A2.58 2.58 0 0 1 6.6 2.25c.649 0 1.199.181 1.623.55c.413.358.634.83.757 1.28c.166.609.181 1.32.177 1.902q.322.122.585.356c.334.297.544.685.696 1.052l.805 1.765c.957-.042 1.89.475 2.507 1.086c.624.617 1.154 1.557 1.1 2.53l1.758.79c.368.152.757.362 1.054.697q.234.262.356.585c.582-.005 1.293.011 1.902.177c.45.123.922.344 1.28.757c.369.424.55.974.55 1.623c0 .6-.173 1.123-.487 1.553c-.309.422-.725.718-1.162.925c-.684.323-1.487.463-2.225.506c-.092.206-.213.4-.372.573c-.554.609-1.389.793-2.354.793h-.035c-1.6-.076-3.201-.734-4.456-1.71a2.3 2.3 0 0 1-.35.15c-.545.182-1.12.152-1.657.016c-1.06-.27-2.143-1.001-3.003-1.858s-1.595-1.938-1.863-3c-.136-.539-.161-1.116.026-1.663q.06-.178.15-.342c-.976-1.255-1.636-2.859-1.711-4.458L2.25 8.85c0-.965.184-1.8.793-2.354a2.1 2.1 0 0 1 .573-.372c.043-.738.183-1.541.506-2.225c.207-.437.503-.853.924-1.162m-.555 4.675c-.225.048-.356.117-.438.192c-.13.12-.3.407-.303 1.228c.06 1.205.554 2.458 1.303 3.468l4.77-2.644L9.068 8l-.012-.026c-.117-.286-.221-.436-.31-.515C8.68 7.4 8.59 7.35 8.4 7.35H5.25a4 4 0 0 0-.759.062M11.7 18.948c1.01.75 2.262 1.241 3.468 1.302c.82-.002 1.108-.172 1.228-.303c.075-.082.144-.213.192-.438l.004-.02a4 4 0 0 0 .058-.739V15.6c0-.191-.05-.28-.108-.345c-.08-.09-.23-.194-.516-.311l-.023-.01l-1.663-.749z"></svg:path>`,
})
export class MynauiCroissantSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCropIcon],svg[mynaui-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.6 3v9.6c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327H21"></svg:path><svg:path d="M9.2 6.6h3.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v3.4M6.6 6.6H3M17.4 21v-3.6"></svg:path></svg:g>`,
})
export class MynauiCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCropSolidIcon],svg[mynaui-crop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 1 0 0 1.5h2.85v5.282c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h5.282V21a.75.75 0 1 0 1.5 0v-2.85H21a.75.75 0 1 0 0-1.5h-2.85v-5.282c0-.813 0-1.469-.043-2c-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.531-.043-1.187-.043-2-.043H7.35z"></svg:path>`,
})
export class MynauiCropSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCrosshairIcon],svg[mynaui-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12h-3M6 12H3m9-6V3m0 18v-3m9-6a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiCrosshairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCrosshairSolidIcon],svg[mynaui-crosshair-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11.25a.75.75 0 0 1 0 1.5H2.278a9.75 9.75 0 0 0 8.972 8.971V18a.75.75 0 0 1 1.5 0v3.721a9.75 9.75 0 0 0 8.971-8.971H18a.75.75 0 1 1 0-1.5h3.721a9.75 9.75 0 0 0-8.971-8.972V6a.75.75 0 0 1-1.5 0V2.278a9.75 9.75 0 0 0-8.972 8.972z"></svg:path>`,
})
export class MynauiCrosshairSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCupcakeIcon],svg[mynaui-cupcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 14l.804 5.626C5.948 20.636 6.308 21 7.385 21H10m-5-7h4m-4 0c-1.303-.604-2-2.236-2-3.666c0-1.536 1.03-2.85 2.49-3.397A.79.79 0 0 0 6 6.208c0-1.265 1.12-2.291 2.5-2.291c.668 0 1.31.322 1.941-.066A5.83 5.83 0 0 1 13.5 3C16.538 3 19 5.257 19 8.042c0 1.256 2 1.594 2 3.208c0 1.277-.712 2.44-2 2.75m0 0h-4m4 0l-.804 5.628C18.044 20.693 17.635 21 16.615 21H14m1-7H9m6 0l-1 7m-5-7l1 7m0 0h4"></svg:path>`,
})
export class MynauiCupcakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiCupcakeSolidIcon],svg[mynaui-cupcake-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.135 14.75H15.65l-.785 5.5h1.75c.466 0 .594-.078.632-.11c.034-.029.139-.141.207-.619zm-4.786 5.5l.786-5.5h-4.27l.785 5.5zm-4.214 0l-.786-5.5H5.865l.681 4.77c.066.462.16.58.199.613c.033.03.158.117.64.117zm-4.824-5.772c-1.407-.876-2.061-2.671-2.061-4.144c0-1.89 1.265-3.46 2.978-4.1a.04.04 0 0 0 .016-.013l.005-.011l.001-.002c0-1.74 1.518-3.041 3.25-3.041c.224 0 .433.026.605.052l.151.023c.113.017.204.031.302.04c.247.025.374.001.49-.07A6.6 6.6 0 0 1 13.5 2.25c3.389 0 6.25 2.533 6.25 5.792c0 .091.029.187.147.335c.121.15.28.29.505.49q.046.039.095.084c.496.439 1.253 1.127 1.253 2.3c0 1.382-.705 2.754-2.073 3.317l-.738 5.166c-.084.588-.261 1.162-.724 1.553c-.46.387-1.046.463-1.6.463h-9.23c-.595 0-1.188-.094-1.64-.5c-.448-.4-.605-.97-.684-1.518z"></svg:path>`,
})
export class MynauiCupcakeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerIcon],svg[mynaui-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19v-.5M12 5v10"></svg:path>`,
})
export class MynauiDangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerCircleIcon],svg[mynaui-danger-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-4.373v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerCircleSolidIcon],svg[mynaui-danger-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.627a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiDangerCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerDiamondIcon],svg[mynaui-danger-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM12 7.627v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerDiamondSolidIcon],svg[mynaui-danger-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m0 5.627a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiDangerDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerHexagonIcon],svg[mynaui-danger-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8M12 7.627v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerHexagonSolidIcon],svg[mynaui-danger-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m0 5.127a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiDangerHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerOctagonIcon],svg[mynaui-danger-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132zM12 7.627v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerOctagonSolidIcon],svg[mynaui-danger-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zM12 6.877a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiDangerOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerSolidIcon],svg[mynaui-danger-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiDangerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerSquareIcon],svg[mynaui-danger-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm9-1.773v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerSquareSolidIcon],svg[mynaui-danger-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM12 6.877a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiDangerSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerTriangleIcon],svg[mynaui-danger-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.5V14m0 3.247v-.5m-6.02-5.985C8.608 5.587 9.92 3 12 3s3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572s.105-3.722 2.287-8.022z"></svg:path>`,
})
export class MynauiDangerTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerTriangleSolidIcon],svg[mynaui-danger-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.583 4.507C9.538 3.159 10.582 2.25 12 2.25s2.462.91 3.417 2.257c.948 1.338 1.953 3.318 3.24 5.852l.39.769c1.065 2.098 1.904 3.75 2.344 5.076c.448 1.348.55 2.552-.121 3.623c-.67 1.066-1.801 1.511-3.22 1.719c-1.398.204-3.272.204-5.656.204h-.788c-2.384 0-4.258 0-5.656-.204c-1.419-.208-2.55-.653-3.22-1.72c-.671-1.07-.569-2.274-.12-3.622c.44-1.325 1.278-2.978 2.344-5.076l.39-.768c1.286-2.535 2.29-4.515 3.24-5.853M12.75 8.5a.75.75 0 0 0-1.5 0V14a.75.75 0 0 0 1.5 0zm0 8.247a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDangerTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerWavesIcon],svg[mynaui-danger-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83M12 7.627v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerWavesSolidIcon],svg[mynaui-danger-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928M12 6.877a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m.75 8.996v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiDangerWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDatabaseIcon],svg[mynaui-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 3C7.582 3 4 4.29 4 5.88c0 4.16 16 4.16 16 0C20 4.29 16.418 3 12 3m8 8.75c0 4.667-16 4.667-16 0"></svg:path><svg:path d="M4 6v12.165c0 3.78 16 3.78 16 0V6"></svg:path></svg:g>`,
})
export class MynauiDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDatabaseSolidIcon],svg[mynaui-database-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.09 3.138C7.637 2.58 9.727 2.25 12 2.25s4.362.33 5.91.888c.772.277 1.449.626 1.947 1.05c.496.421.893.99.893 1.692l-.001.077l.001.043v12.165c0 .772-.418 1.38-.965 1.823c-.54.438-1.265.768-2.06 1.019c-1.597.503-3.679.743-5.725.743s-4.128-.24-5.725-.743c-.795-.25-1.52-.581-2.06-1.019c-.547-.443-.965-1.051-.965-1.823V6l.001-.043l-.001-.077c0-.702.397-1.27.893-1.692c.498-.424 1.175-.773 1.946-1.05M4.75 8.226v3.524c0 .664.574 1.363 2.022 1.926c1.386.54 3.287.824 5.228.824s3.842-.285 5.228-.824c1.448-.563 2.022-1.262 2.022-1.926V8.226a7.2 7.2 0 0 1-1.504.703c-1.605.556-3.694.821-5.746.821s-4.141-.265-5.746-.821a7.2 7.2 0 0 1-1.504-.703"></svg:path>`,
})
export class MynauiDatabaseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDazeCircleIcon],svg[mynaui-daze-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7.25l-1.333-1l-1.334 1l-1.333-1l-1.333 1l-1.334-1l-1.333 1"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiDazeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDazeCircleSolidIcon],svg[mynaui-daze-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12M7.4 8.55a.75.75 0 0 1 1.05-.15l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9l-1.2-.9a.75.75 0 0 1-.15-1.05m9.05 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 1 1 .9 1.2m-7.567 5.05a.75.75 0 0 1 .9 0l.884.662l.883-.662a.75.75 0 0 1 .9 0l.883.662l.884-.662a.75.75 0 0 1 .9 0l1.333 1a.75.75 0 1 1-.9 1.2l-.883-.663l-.884.663a.75.75 0 0 1-.9 0L12 16.187l-.883.663a.75.75 0 0 1-.9 0l-.884-.663l-.883.663a.75.75 0 1 1-.9-1.2z"></svg:path>`,
})
export class MynauiDazeCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDazeGhostIcon],svg[mynaui-daze-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7.25l-1.333-1l-1.334 1l-1.333-1l-1.333 1l-1.334-1l-1.333 1"></svg:path><svg:path d="M3 18.562v-6.518C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiDazeGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDazeGhostSolidIcon],svg[mynaui-daze-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6.633 2.606a.75.75 0 0 1 .9 0l.884.662l.883-.662a.75.75 0 0 1 .9 0l.883.662l.884-.662a.75.75 0 0 1 .9 0l1.333 1a.75.75 0 1 1-.9 1.2l-.883-.663l-.884.663a.75.75 0 0 1-.9 0L12 16.187l-.883.663a.75.75 0 0 1-.9 0l-.884-.663l-.883.663a.75.75 0 1 1-.9-1.2zM8.45 8.4l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9l-1.2-.9a.75.75 0 0 1 .9-1.2m8.15.15a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15"></svg:path>`,
})
export class MynauiDazeGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDazeSquareIcon],svg[mynaui-daze-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7.25l-1.333-1l-1.334 1l-1.333-1l-1.333 1l-1.334-1l-1.333 1"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiDazeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDazeSquareSolidIcon],svg[mynaui-daze-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.484 12.4a.75.75 0 0 1 .9 0l.884.662l.883-.662a.75.75 0 0 1 .9 0l.883.662l.884-.662a.75.75 0 0 1 .9 0l1.333 1a.75.75 0 1 1-.9 1.2l-.883-.663l-.884.663a.75.75 0 0 1-.9 0L12 16.187l-.883.663a.75.75 0 0 1-.9 0l-.884-.663l-.883.663a.75.75 0 1 1-.9-1.2zM8.45 8.4l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9l-1.2-.9a.75.75 0 0 1 .9-1.2m8.15.15a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15"></svg:path>`,
})
export class MynauiDazeSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDeleteIcon],svg[mynaui-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 10l4 4m0-4l-4 4m6.095 4.5H9.298a2 2 0 0 1-1.396-.568l-5.35-5.216a1 1 0 0 1 0-1.432l5.35-5.216A2 2 0 0 1 9.298 5.5h10.297c.95 0 2.223.541 2.223 1.625v9.75c0 1.084-1.273 1.625-2.223 1.625"></svg:path>`,
})
export class MynauiDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDeleteSolidIcon],svg[mynaui-delete-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.378 5.531a2.75 2.75 0 0 1 1.92-.781h10.297c.598 0 1.294.166 1.863.519c.579.358 1.11.974 1.11 1.856v9.75c0 .882-.531 1.497-1.11 1.856a3.65 3.65 0 0 1-1.863.519H9.298a2.75 2.75 0 0 1-1.92-.781l-5.35-5.216a1.75 1.75 0 0 1 0-2.506zM14.03 9.47a.75.75 0 1 0-1.06 1.06L14.44 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06L16.56 12l1.47-1.47a.75.75 0 1 0-1.06-1.06l-1.47 1.47z"></svg:path>`,
})
export class MynauiDeleteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDesktopIcon],svg[mynaui-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20h3m3 0h-3m0 0v-3m0 0h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z"></svg:path>`,
})
export class MynauiDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDesktopSolidIcon],svg[mynaui-desktop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v9A2.75 2.75 0 0 0 5 17.75h6.25v1.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.5H19A2.75 2.75 0 0 0 21.75 15V6A2.75 2.75 0 0 0 19 3.25z"></svg:path>`,
})
export class MynauiDesktopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiamondIcon],svg[mynaui-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path>`,
})
export class MynauiDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiamondSolidIcon],svg[mynaui-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25"></svg:path>`,
})
export class MynauiDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceFiveIcon],svg[mynaui-dice-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 8h-.5m.5 8h-.5m8.5-8h-.5m.5 8h-.5m-3.5-4h-.5M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path>`,
})
export class MynauiDiceFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceFiveSolidIcon],svg[mynaui-dice-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-1.617 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDiceFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceFourIcon],svg[mynaui-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 8h-.5m.5 8h-.5m8.5-8h-.5m.5 8h-.5M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path>`,
})
export class MynauiDiceFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceFourSolidIcon],svg[mynaui-dice-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-1.617 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-8 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDiceFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceOneIcon],svg[mynaui-dice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.75 12h.5M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path>`,
})
export class MynauiDiceOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceOneSolidIcon],svg[mynaui-dice-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.383 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDiceOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceSixIcon],svg[mynaui-dice-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 12h-.5m.5-4h-.5m.5 8h-.5m8.5-4h-.5m.5-4h-.5m.5 8h-.5M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path>`,
})
export class MynauiDiceSixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceSixSolidIcon],svg[mynaui-dice-six-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-1.617 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-8 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-8 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDiceSixSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceThreeIcon],svg[mynaui-dice-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 8h-.5m4.5 4h-.5m4.5 4h-.5M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path>`,
})
export class MynauiDiceThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceThreeSolidIcon],svg[mynaui-dice-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-1.617 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm4 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm4 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDiceThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceTwoIcon],svg[mynaui-dice-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 8h-.5m8.5 8h-.5M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path>`,
})
export class MynauiDiceTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDiceTwoSolidIcon],svg[mynaui-dice-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-1.617 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm8 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDiceTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDislikeIcon],svg[mynaui-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.46 13.895H4.927C2.381 13.895 5.691 3 7.515 3h12.521c.532 0 .964.424.964.947v9.385a.95.95 0 0 1-.502.832c-2.062 1.106-4.481 2.012-5.678 4.129l-1.28 2.266a.87.87 0 0 1-.762.441c-3.18 0-2.237-4.63-1.805-6.47a.52.52 0 0 0-.513-.635"></svg:path>`,
})
export class MynauiDislikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDislikeSolidIcon],svg[mynaui-dislike-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.193 20.928a1.62 1.62 0 0 1-1.415.822c-1.005 0-1.773-.38-2.282-1.048c-.477-.628-.664-1.43-.723-2.189c-.106-1.37.188-2.908.404-3.868h-5.25c-.661 0-1.117-.389-1.364-.882c-.225-.446-.301-1.004-.312-1.556c-.021-1.124.23-2.564.607-3.956c.38-1.4.902-2.813 1.459-3.893c.276-.536.577-1.02.894-1.383c.28-.321.725-.725 1.304-.725h12.521c.935 0 1.714.748 1.714 1.697v9.385c0 .628-.349 1.199-.898 1.493m0 0c-.39.21-.773.402-1.148.591c-.68.343-1.335.673-1.973 1.07c-.958.596-1.746 1.27-2.258 2.176l-1.28 2.266"></svg:path>`,
})
export class MynauiDislikeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDivideIcon],svg[mynaui-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18m-9-6.256V5m0 14v-.744"></svg:path>`,
})
export class MynauiDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDivideSolidIcon],svg[mynaui-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M12 4.25a.75.75 0 0 1 .75.75v.744a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.256a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-.744a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiDivideSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarIcon],svg[mynaui-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 5h-5m0 0H9.5a3.5 3.5 0 1 0 0 7H12m0-7V3m0 2v7m0 0h2.5a3.5 3.5 0 1 1 0 7H12m0-7v7m0 0H6m6 0v2"></svg:path>`,
})
export class MynauiDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarCircleIcon],svg[mynaui-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862C8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139s-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5"></svg:path></svg:g>`,
})
export class MynauiDollarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarCircleSolidIcon],svg[mynaui-dollar-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.333 8.472h.917v2.778h-.917c-.937 0-1.583-.682-1.583-1.389s.646-1.389 1.583-1.389m2.417 7.056V12.75h.917c.937 0 1.583.682 1.583 1.389s-.646 1.389-1.583 1.389z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-5.5a.75.75 0 0 0-1.5 0v.472h-.917c-1.64 0-3.083 1.234-3.083 2.89c0 1.655 1.443 2.888 3.083 2.888h.917v2.778H8a.75.75 0 0 0 0 1.5h3.25v.472a.75.75 0 0 0 1.5 0v-.472h.917c1.64 0 3.083-1.233 3.083-2.89c0-1.655-1.443-2.888-3.083-2.888h-.917V8.472h2.583a.75.75 0 0 0 0-1.5H12.75z"></svg:path></svg:g>`,
})
export class MynauiDollarCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarDiamondIcon],svg[mynaui-dollar-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862C8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139s-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5"></svg:path></svg:g>`,
})
export class MynauiDollarDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarDiamondSolidIcon],svg[mynaui-dollar-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.333 8.472h.917v2.778h-.917c-.937 0-1.583-.682-1.583-1.389s.646-1.389 1.583-1.389m2.417 7.056V12.75h.917c.937 0 1.583.682 1.583 1.389s-.646 1.389-1.583 1.389z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m1.96 5.01a.75.75 0 0 0-1.5 0v.472h-.917c-1.64 0-3.083 1.234-3.083 2.89c0 1.655 1.443 2.888 3.083 2.888h.917v2.778H8a.75.75 0 0 0 0 1.5h3.25v.472a.75.75 0 0 0 1.5 0v-.472h.917c1.64 0 3.083-1.233 3.083-2.89c0-1.655-1.443-2.888-3.083-2.888h-.917V8.472h2.583a.75.75 0 0 0 0-1.5H12.75z"></svg:path></svg:g>`,
})
export class MynauiDollarDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarHexagonIcon],svg[mynaui-dollar-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862C8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139s-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5"></svg:path></svg:g>`,
})
export class MynauiDollarHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarHexagonSolidIcon],svg[mynaui-dollar-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.333 8.472h.917v2.778h-.917c-.937 0-1.583-.682-1.583-1.389s.646-1.389 1.583-1.389m2.417 7.056V12.75h.917c.937 0 1.583.682 1.583 1.389s-.646 1.389-1.583 1.389z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM12.75 6.5a.75.75 0 0 0-1.5 0v.472h-.917c-1.64 0-3.083 1.234-3.083 2.89c0 1.655 1.443 2.888 3.083 2.888h.917v2.778H8a.75.75 0 0 0 0 1.5h3.25v.472a.75.75 0 0 0 1.5 0v-.472h.917c1.64 0 3.083-1.233 3.083-2.89c0-1.655-1.443-2.888-3.083-2.888h-.917V8.472h2.583a.75.75 0 0 0 0-1.5H12.75z"></svg:path></svg:g>`,
})
export class MynauiDollarHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarOctagonIcon],svg[mynaui-dollar-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862C8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139s-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5"></svg:path></svg:g>`,
})
export class MynauiDollarOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarOctagonSolidIcon],svg[mynaui-dollar-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.333 8.472h.917v2.778h-.917c-.937 0-1.583-.682-1.583-1.389s.646-1.389 1.583-1.389m2.417 7.056V12.75h.917c.937 0 1.583.682 1.583 1.389s-.646 1.389-1.583 1.389z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M12.75 6.5a.75.75 0 0 0-1.5 0v.472h-.917c-1.64 0-3.083 1.234-3.083 2.89c0 1.655 1.443 2.888 3.083 2.888h.917v2.778H8a.75.75 0 0 0 0 1.5h3.25v.472a.75.75 0 0 0 1.5 0v-.472h.917c1.64 0 3.083-1.233 3.083-2.89c0-1.655-1.443-2.888-3.083-2.888h-.917V8.472h2.583a.75.75 0 0 0 0-1.5H12.75z"></svg:path></svg:g>`,
})
export class MynauiDollarOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarSolidIcon],svg[mynaui-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v1.25H17a.75.75 0 0 1 0 1.5h-4.25v5.5h1.75a4.25 4.25 0 0 1 0 8.5h-1.75V21a.75.75 0 0 1-1.5 0v-1.25H6a.75.75 0 0 1 0-1.5h5.25v-5.5H9.5a4.25 4.25 0 0 1 0-8.5h1.75V3a.75.75 0 0 1 .75-.75m-.75 3.5H9.5a2.75 2.75 0 0 0 0 5.5h1.75zm1.5 7v5.5h1.75a2.75 2.75 0 1 0 0-5.5z"></svg:path>`,
})
export class MynauiDollarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarSquareIcon],svg[mynaui-dollar-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862C8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139s-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5"></svg:path></svg:g>`,
})
export class MynauiDollarSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarSquareSolidIcon],svg[mynaui-dollar-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.333 8.472h.917v2.778h-.917c-.937 0-1.583-.682-1.583-1.389s.646-1.389 1.583-1.389m2.417 7.056V12.75h.917c.937 0 1.583.682 1.583 1.389s-.646 1.389-1.583 1.389z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M12.75 6.5a.75.75 0 0 0-1.5 0v.472h-.917c-1.64 0-3.083 1.234-3.083 2.89c0 1.655 1.443 2.888 3.083 2.888h.917v2.778H8a.75.75 0 0 0 0 1.5h3.25v.472a.75.75 0 0 0 1.5 0v-.472h.917c1.64 0 3.083-1.233 3.083-2.89c0-1.655-1.443-2.888-3.083-2.888h-.917V8.472h2.583a.75.75 0 0 0 0-1.5H12.75z"></svg:path></svg:g>`,
})
export class MynauiDollarSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarWavesIcon],svg[mynaui-dollar-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M15.333 7.722H12m0 0h-1.667C9.045 7.722 8 8.68 8 9.862C8 11.041 9.045 12 10.333 12H12m0-4.278V6.5m0 1.222V12m0 0h1.667c1.288 0 2.333.958 2.333 2.139s-1.045 2.139-2.333 2.139H12M12 12v4.278m0 0H8m4 0V17.5"></svg:path></svg:g>`,
})
export class MynauiDollarWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarWavesSolidIcon],svg[mynaui-dollar-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.333 8.472h.917v2.778h-.917c-.937 0-1.583-.682-1.583-1.389s.646-1.389 1.583-1.389m2.417 7.056V12.75h.917c.937 0 1.583.682 1.583 1.389s-.646 1.389-1.583 1.389z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M12.75 6.5a.75.75 0 0 0-1.5 0v.472h-.917c-1.64 0-3.083 1.234-3.083 2.89c0 1.655 1.443 2.888 3.083 2.888h.917v2.778H8a.75.75 0 0 0 0 1.5h3.25v.472a.75.75 0 0 0 1.5 0v-.472h.917c1.64 0 3.083-1.233 3.083-2.89c0-1.655-1.443-2.888-3.083-2.888h-.917V8.472h2.583a.75.75 0 0 0 0-1.5H12.75z"></svg:path></svg:g>`,
})
export class MynauiDollarWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsIcon],svg[mynaui-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsCircleIcon],svg[mynaui-dots-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 .25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsCircleSolidIcon],svg[mynaui-dots-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-.25a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 16 11m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDotsCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsDiamondIcon],svg[mynaui-dots-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM12 12.25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsDiamondSolidIcon],svg[mynaui-dots-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m1.96 10.26a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 16 11m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDotsDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsHexagonIcon],svg[mynaui-dots-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8M12 12.25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsHexagonSolidIcon],svg[mynaui-dots-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm2.07 9.645a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 16 11m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDotsHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsOctagonIcon],svg[mynaui-dots-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132zM12 12.25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsOctagonSolidIcon],svg[mynaui-dots-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m4.713 9.342a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 16 11m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDotsOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsSolidIcon],svg[mynaui-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 12 11m4 0a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 16 11m-8 0a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 11"></svg:path>`,
})
export class MynauiDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsSquareIcon],svg[mynaui-dots-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm9 2.85v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsSquareSolidIcon],svg[mynaui-dots-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.383 9.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 16 11m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDotsSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalIcon],svg[mynaui-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.25 12h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalCircleIcon],svg[mynaui-dots-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.75 0h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalCircleSolidIcon],svg[mynaui-dots-vertical-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9.5-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalDiamondIcon],svg[mynaui-dots-vertical-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM12.25 12h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalDiamondSolidIcon],svg[mynaui-dots-vertical-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m.96 9.76a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalHexagonIcon],svg[mynaui-dots-vertical-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8M12.25 12h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalHexagonSolidIcon],svg[mynaui-dots-vertical-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm1.07 9.145a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalOctagonIcon],svg[mynaui-dots-vertical-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132zM12.25 12h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalOctagonSolidIcon],svg[mynaui-dots-vertical-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m3.713 8.842a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalSolidIcon],svg[mynaui-dots-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 12m0-4a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 8m0 8a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 16"></svg:path>`,
})
export class MynauiDotsVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalSquareIcon],svg[mynaui-dots-vertical-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm9.25 2.6h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalSquareSolidIcon],svg[mynaui-dots-vertical-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.383 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalWavesIcon],svg[mynaui-dots-vertical-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83M12.25 12h-.5m.5-4h-.5m.5 8h-.5"></svg:path>`,
})
export class MynauiDotsVerticalWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalWavesSolidIcon],svg[mynaui-dots-vertical-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m1.185 9.175a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsWavesIcon],svg[mynaui-dots-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83M12 12.25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsWavesSolidIcon],svg[mynaui-dots-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m2.185 9.675a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 11a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 16 11m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiDotsWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDownloadIcon],svg[mynaui-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16.004V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M12 4.5v11m3.5-3.5L12 15.5L8.5 12"></svg:path>`,
})
export class MynauiDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDownloadSolidIcon],svg[mynaui-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 15.25a.75.75 0 0 1 .75.75v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-.996a.75.75 0 1 1 1.5 0V17A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17v-1a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M12.75 4.5a.75.75 0 0 0-1.5 0v6.97H7.97a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 0-1.06h-3.28z"></svg:path></svg:g>`,
})
export class MynauiDownloadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDropIcon],svg[mynaui-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.495 3c3.58 3.56 9.345 7.602 6.932 13.397C18.275 19.163 15.492 21 12.5 21s-5.775-1.837-6.927-4.603C3.161 10.607 8.92 6.561 12.495 3"></svg:path>`,
})
export class MynauiDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiDropSolidIcon],svg[mynaui-drop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.024 2.468a.75.75 0 0 0-1.058 0c-.508.506-1.04 1.002-1.594 1.52c-.428.4-.87.813-1.327 1.254c-1.015.98-2.032 2.036-2.863 3.18c-1.677 2.306-2.642 5.043-1.301 8.264C6.15 19.734 9.208 21.75 12.5 21.75s6.35-2.016 7.62-5.064c1.341-3.223.374-5.96-1.305-8.267c-.832-1.143-1.85-2.2-2.866-3.179c-.457-.44-.901-.854-1.33-1.254a68 68 0 0 1-1.595-1.518"></svg:path>`,
})
export class MynauiDropSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEarIcon],svg[mynaui-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.555 16.46c0 1.68.86 3.04 2.415 3.04s2.819-1.14 3.221-3.04c.733-3.451 5.496-4.293 3.628-8.878C14.799 2.622 6.75 3.899 6.75 9.618"></svg:path><svg:path d="M9.5 14c.46 0 .921-.29 1.295-.618c.572-.5.613-1.351.194-1.985c-.407-.619-1.336-1.173-1.156-2.018c.595-2.793 4.222-2.41 4.463.383"></svg:path></svg:g>`,
})
export class MynauiEarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEarSlashIcon],svg[mynaui-ear-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.555 16.46c0 1.68.86 3.04 2.415 3.04s2.819-1.14 3.221-3.04c.733-3.451 5.496-4.293 3.628-8.878C14.799 2.622 6.75 3.899 6.75 9.618"></svg:path><svg:path d="M9.5 14c.46 0 .921-.29 1.295-.618c.572-.5.613-1.351.194-1.985c-.407-.619-1.336-1.173-1.156-2.018c.595-2.793 4.222-2.41 4.463.383M21 3L3 21"></svg:path></svg:g>`,
})
export class MynauiEarSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEarSlashSolidIcon],svg[mynaui-ear-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-3.946 3.947c.451 1.187.517 2.208.287 3.124c-.238.945-.77 1.694-1.323 2.335c-.243.282-.503.556-.75.817l-.1.105a17 17 0 0 0-.788.878c-.48.587-.836 1.179-.985 1.879c-.457 2.156-1.96 3.635-3.955 3.635a2.9 2.9 0 0 1-2.393-1.193a3.7 3.7 0 0 1-.533-1.04L3.53 21.53a.75.75 0 0 1-1.06-1.06l6.3-6.3a.752.752 0 0 1 .73-.92q.103 0 .252-.062l.757-.758a.87.87 0 0 0-.146-.62a3 3 0 0 0-.3-.36q-.034-.034-.07-.075a8 8 0 0 1-.385-.43c-.304-.376-.67-.96-.508-1.722c.376-1.77 1.779-2.625 3.168-2.494a3.02 3.02 0 0 1 2.367 1.575l1.133-1.132c-.997-1.566-2.849-2.16-4.606-1.839C9.182 5.695 7.5 7.188 7.5 9.618a.75.75 0 0 1-1.5 0c0-3.289 2.342-5.294 4.892-5.76c2.139-.391 4.552.279 5.957 2.232l3.62-3.62a.75.75 0 0 1 1.061 0m-5.14 6.2l-1.42 1.42a.75.75 0 0 1-.347.346L11.82 13.24c-.12.258-.294.498-.53.705a4 4 0 0 1-.642.467l-2.333 2.332c.042.593.215 1.08.466 1.417c.274.368.658.588 1.19.588c1.115 0 2.138-.801 2.486-2.446c.218-1.025.732-1.833 1.292-2.518c.28-.34.577-.66.86-.958l.1-.106c.25-.264.485-.512.704-.766c.495-.573.85-1.11 1.003-1.72c.107-.427.126-.933-.027-1.565m-4.649 2.527l1.745-1.745c-.201-.783-.79-1.176-1.36-1.23c-.633-.06-1.341.29-1.56 1.312c-.017.083-.01.198.208.466c.087.108.183.21.298.333l.089.095c.141.152.315.343.455.555q.068.104.125.214"></svg:path>`,
})
export class MynauiEarSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEarSolidIcon],svg[mynaui-ear-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.892 3.858c2.532-.463 5.448.561 6.621 3.44c.515 1.265.599 2.341.358 3.303c-.238.945-.77 1.694-1.323 2.335c-.243.282-.503.556-.75.818l-.1.104a17 17 0 0 0-.788.878c-.48.587-.837 1.179-.985 1.88c-.457 2.155-1.96 3.634-3.955 3.634a2.9 2.9 0 0 1-2.393-1.193c-.528-.71-.772-1.64-.772-2.598a.75.75 0 0 1 1.5 0c0 .723.186 1.313.476 1.703c.274.368.658.588 1.19.588c1.115 0 2.138-.801 2.486-2.446c.218-1.025.732-1.833 1.292-2.518c.28-.34.577-.66.86-.958l.1-.106c.25-.264.485-.512.704-.766c.495-.573.85-1.11 1.003-1.72c.149-.594.128-1.342-.292-2.371c-.847-2.08-2.965-2.897-4.962-2.532C9.182 5.695 7.5 7.188 7.5 9.618a.75.75 0 0 1-1.5 0c0-3.289 2.342-5.294 4.892-5.76"></svg:path><svg:path d="M12.126 8.223c-.633-.06-1.341.29-1.56 1.312c-.017.083-.01.198.208.466c.087.108.183.21.298.333l.089.095c.141.152.315.343.455.555c.585.888.576 2.17-.326 2.962c-.403.353-1.042.804-1.79.804a.75.75 0 0 1 0-1.5c.173 0 .455-.129.801-.432c.24-.21.313-.628.062-1.008a3 3 0 0 0-.3-.36q-.034-.034-.07-.075a8 8 0 0 1-.385-.43c-.304-.376-.67-.96-.508-1.722c.376-1.77 1.779-2.625 3.168-2.494c1.37.13 2.623 1.21 2.775 2.97a.75.75 0 1 1-1.494.128c-.09-1.033-.77-1.542-1.423-1.604"></svg:path></svg:g>`,
})
export class MynauiEarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEarthIcon],svg[mynaui-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M13 3.048a5 5 0 0 0 .982 8.3c2.018 1.013 2.789-.352 3.881.384c.71.478.897 1.44.42 2.149c-.501.742-1.283 1.119-1.148 2.336c.077.687.499 1.278 1.045 1.783M4 9.28a4.98 4.98 0 0 1 2.806 1.846a4.98 4.98 0 0 1 .992 3.424c-.052.626.356 1.258.881 1.603A2.71 2.71 0 0 1 9 20.44"></svg:path></svg:g>`,
})
export class MynauiEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEarthSolidIcon],svg[mynaui-earth-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.467 8.63a5.73 5.73 0 0 1 2.938 2.044a5.73 5.73 0 0 1 1.14 3.939c-.023.275.178.672.546.912a3.46 3.46 0 0 1 1.15 4.537A8.3 8.3 0 0 0 12 20.25c2.054 0 3.932-.75 5.376-1.992c-.486-.518-.898-1.169-.986-1.958c-.09-.816.136-1.396.47-1.864a6 6 0 0 1 .42-.51l.033-.037c.142-.16.254-.289.347-.428a.8.8 0 0 0-.216-1.107c-.217-.146-.322-.124-.909 0l-.11.024c-.682.144-1.568.249-2.78-.36a5.75 5.75 0 0 1-2.267-8.246a8.26 8.26 0 0 0-6.91 4.858m8.51-6.332q.105-.003.209.023C18.01 2.906 21.75 7.017 21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12S6.615 2.25 12 2.25q.495 0 .977.048"></svg:path>`,
})
export class MynauiEarthSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEclipseIcon],svg[mynaui-eclipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.183 3.183A9 9 0 0 0 3 12a9 9 0 0 0 17.817 1.817M10.183 3.183a9 9 0 0 1 10.633 10.633M10.184 3.184c-1.268 6.188 4.533 11.884 10.634 10.634"></svg:path>`,
})
export class MynauiEclipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEclipseSolidIcon],svg[mynaui-eclipse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.833 3.832c-.737 5.292 4.105 10.058 9.335 9.335q.081-.57.082-1.167a8.25 8.25 0 0 0-9.417-8.168m-.8-1.383A9.8 9.8 0 0 1 12 2.25A9.75 9.75 0 0 1 21.75 12q-.001 1.011-.199 1.967c-.91 4.442-4.84 7.783-9.551 7.783A9.75 9.75 0 0 1 2.25 12c0-4.711 3.341-8.64 7.783-9.551"></svg:path>`,
})
export class MynauiEclipseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEditIcon],svg[mynaui-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21h16M5.666 13.187A2.28 2.28 0 0 0 5 14.797V18h3.223c.604 0 1.183-.24 1.61-.668l9.5-9.505a2.28 2.28 0 0 0 0-3.22l-.938-.94a2.277 2.277 0 0 0-3.222.001z"></svg:path>`,
})
export class MynauiEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEditOneIcon],svg[mynaui-edit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.533 11.15A1.82 1.82 0 0 0 9 12.438V15h2.578c.483 0 .947-.192 1.289-.534l7.6-7.604a1.82 1.82 0 0 0 0-2.577l-.751-.751a1.82 1.82 0 0 0-2.578 0z"></svg:path><svg:path d="M21 12c0 4.243 0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12s0-6.364 1.318-7.682S7.758 3 12 3"></svg:path></svg:g>`,
})
export class MynauiEditOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEditOneSolidIcon],svg[mynaui-edit-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.607 3.005a2.57 2.57 0 0 1 3.64-.001l.75.751a2.57 2.57 0 0 1 0 3.637l-7.6 7.604a2.57 2.57 0 0 1-1.819.754H9a.75.75 0 0 1-.75-.75v-2.562c0-.682.27-1.336.752-1.818z"></svg:path><svg:path d="M11.943 2.25H12a.75.75 0 0 1 0 1.5c-2.143 0-3.674.002-4.838.158c-1.142.154-1.817.444-2.314.94c-.496.497-.786 1.172-.94 2.314C3.752 8.326 3.75 9.857 3.75 12s.002 3.674.158 4.838c.154 1.142.444 1.817.94 2.314c.497.496 1.172.786 2.314.94c1.164.156 2.695.158 4.838.158s3.674-.002 4.838-.158c1.142-.154 1.817-.444 2.314-.94c.496-.497.786-1.172.94-2.314c.156-1.164.158-2.696.158-4.838a.75.75 0 0 1 1.5 0v.057c0 2.073 0 3.705-.171 4.98c-.176 1.31-.545 2.354-1.367 3.175c-.821.822-1.866 1.19-3.174 1.367c-1.276.171-2.908.171-4.981.171h-.114c-2.073 0-3.705 0-4.98-.171c-1.31-.176-2.354-.545-3.175-1.367c-.822-.821-1.19-1.866-1.367-3.174c-.171-1.276-.171-2.908-.171-4.981v-.114c0-2.073 0-3.705.171-4.98c.176-1.31.545-2.354 1.367-3.175c.821-.822 1.866-1.19 3.174-1.367c1.276-.171 2.908-.171 4.981-.171"></svg:path></svg:g>`,
})
export class MynauiEditOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEditSolidIcon],svg[mynaui-edit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.925 3.137a3.027 3.027 0 0 0-4.283.001l-9.507 9.52a3.03 3.03 0 0 0-.885 2.139V18c0 .414.336.75.75.75h3.223c.803 0 1.573-.32 2.14-.887l9.5-9.506a3.03 3.03 0 0 0 0-4.28zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiEditSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEggIcon],svg[mynaui-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c4.004 0 7.25-3.224 7.25-7.2S16.004 3 12 3S4.75 9.824 4.75 13.8S7.996 21 12 21"></svg:path>`,
})
export class MynauiEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEggSolidIcon],svg[mynaui-egg-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-1.223 0-2.337.521-3.294 1.295c-.955.773-1.79 1.827-2.477 2.98C4.864 8.817 4 11.65 4 13.8c0 4.395 3.587 7.95 8 7.95s8-3.555 8-7.95c0-2.151-.864-4.983-2.23-7.275c-.686-1.153-1.52-2.207-2.476-2.98C14.337 2.771 13.222 2.25 12 2.25"></svg:path>`,
})
export class MynauiEggSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightIcon],svg[mynaui-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.875 12S15 12.625 15 14.5S13.6 17 11.875 17s-3.125-.625-3.125-2.5s3.125-2.5 3.125-2.5m0 0S15 11.375 15 9.5S13.6 7 11.875 7S8.75 7.625 8.75 9.5s3.125 2.5 3.125 2.5"></svg:path>`,
})
export class MynauiEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightCircleIcon],svg[mynaui-eight-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path></svg:g>`,
})
export class MynauiEightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightCircleSolidIcon],svg[mynaui-eight-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.008 9.935c0-.597.212-.91.496-1.104c.324-.22.83-.342 1.496-.342s1.172.122 1.496.342c.284.193.496.507.496 1.104c0 .388-.335.75-.963 1.06a5 5 0 0 1-1.029.369a5.5 5.5 0 0 1-1.03-.37c-.627-.31-.962-.67-.962-1.06m1.763 2.764c.091-.027.17-.047.229-.062a5.5 5.5 0 0 1 1.03.37c.627.31.962.67.962 1.06c0 .596-.212.91-.496 1.103c-.324.22-.83.342-1.496.342s-1.172-.122-1.496-.342c-.284-.193-.496-.507-.496-1.104c0-.388.335-.75.963-1.06a5 5 0 0 1 .8-.307"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.5-2.065c0 1.053.803 1.702 1.462 2.065c-.66.363-1.462 1.012-1.462 2.065c0 .952.374 1.671 1.04 2.123c.624.426 1.428.562 2.21.562s1.586-.136 2.21-.562c.666-.452 1.04-1.17 1.04-2.123c0-1.053-.803-1.702-1.462-2.065c.66-.363 1.462-1.012 1.462-2.065c0-.952-.374-1.671-1.04-2.123c-.624-.426-1.428-.562-2.21-.562s-1.586.136-2.21.562c-.666.452-1.04 1.17-1.04 2.123"></svg:path></svg:g>`,
})
export class MynauiEightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightDiamondIcon],svg[mynaui-eight-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path></svg:g>`,
})
export class MynauiEightDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightDiamondSolidIcon],svg[mynaui-eight-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.008 9.935c0-.597.212-.91.496-1.104c.324-.22.83-.342 1.496-.342s1.172.122 1.496.342c.284.193.496.507.496 1.104c0 .388-.335.75-.963 1.06a5 5 0 0 1-1.029.369a5.5 5.5 0 0 1-1.03-.37c-.627-.31-.962-.67-.962-1.06m1.763 2.764c.091-.027.17-.047.229-.062a5.5 5.5 0 0 1 1.03.37c.627.31.962.67.962 1.06c0 .596-.212.91-.496 1.103c-.324.22-.83.342-1.496.342s-1.172-.122-1.496-.342c-.284-.193-.496-.507-.496-1.104c0-.388.335-.75.963-1.06a5 5 0 0 1 .8-.307"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M8.75 9.936c0 1.053.803 1.702 1.462 2.065c-.66.363-1.462 1.012-1.462 2.065c0 .952.374 1.671 1.04 2.123c.624.426 1.428.562 2.21.562s1.586-.136 2.21-.562c.666-.452 1.04-1.17 1.04-2.123c0-1.053-.803-1.702-1.462-2.065c.66-.363 1.462-1.012 1.462-2.065c0-.952-.374-1.671-1.04-2.123c-.624-.426-1.428-.562-2.21-.562s-1.586.136-2.21.562c-.666.452-1.04 1.17-1.04 2.123"></svg:path></svg:g>`,
})
export class MynauiEightDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightHexagonIcon],svg[mynaui-eight-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path></svg:g>`,
})
export class MynauiEightHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightHexagonSolidIcon],svg[mynaui-eight-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.008 9.935c0-.597.212-.91.496-1.104c.324-.22.83-.342 1.496-.342s1.172.122 1.496.342c.284.193.496.507.496 1.104c0 .388-.335.75-.963 1.06a5 5 0 0 1-1.029.369a5.5 5.5 0 0 1-1.03-.37c-.627-.31-.962-.67-.962-1.06m1.763 2.764c.091-.027.17-.047.229-.062a5.5 5.5 0 0 1 1.03.37c.627.31.962.67.962 1.06c0 .596-.212.91-.496 1.103c-.324.22-.83.342-1.496.342s-1.172-.122-1.496-.342c-.284-.193-.496-.507-.496-1.104c0-.388.335-.75.963-1.06a5 5 0 0 1 .8-.307"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-1.93 7.83c0 1.053.803 1.702 1.462 2.065c-.66.363-1.462 1.012-1.462 2.065c0 .952.374 1.671 1.04 2.123c.624.426 1.428.562 2.21.562s1.586-.136 2.21-.562c.666-.452 1.04-1.17 1.04-2.123c0-1.053-.803-1.702-1.462-2.065c.66-.363 1.462-1.012 1.462-2.065c0-.952-.374-1.671-1.04-2.123c-.624-.426-1.428-.562-2.21-.562s-1.586.136-2.21.562c-.666.452-1.04 1.17-1.04 2.123"></svg:path></svg:g>`,
})
export class MynauiEightHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightOctagonIcon],svg[mynaui-eight-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path></svg:g>`,
})
export class MynauiEightOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightOctagonSolidIcon],svg[mynaui-eight-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.008 9.935c0-.597.212-.91.496-1.104c.324-.22.83-.342 1.496-.342s1.172.122 1.496.342c.284.193.496.507.496 1.104c0 .388-.335.75-.963 1.06a5 5 0 0 1-1.029.369a5.5 5.5 0 0 1-1.03-.37c-.627-.31-.962-.67-.962-1.06m1.763 2.764c.091-.027.17-.047.229-.062a5.5 5.5 0 0 1 1.03.37c.627.31.962.67.962 1.06c0 .596-.212.91-.496 1.103c-.324.22-.83.342-1.496.342s-1.172-.122-1.496-.342c-.284-.193-.496-.507-.496-1.104c0-.388.335-.75.963-1.06a5 5 0 0 1 .8-.307"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m.713 7.527c0 1.053.803 1.702 1.462 2.065c-.66.363-1.462 1.012-1.462 2.065c0 .952.374 1.671 1.04 2.123c.624.426 1.428.562 2.21.562s1.586-.136 2.21-.562c.666-.452 1.04-1.17 1.04-2.123c0-1.053-.803-1.702-1.462-2.065c.66-.363 1.462-1.012 1.462-2.065c0-.952-.374-1.671-1.04-2.123c-.624-.426-1.428-.562-2.21-.562s-1.586.136-2.21.562c-.666.452-1.04 1.17-1.04 2.123"></svg:path></svg:g>`,
})
export class MynauiEightOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightSolidIcon],svg[mynaui-eight-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.092 8.164c-.339.234-.592.614-.592 1.336c0 .47.4.908 1.148 1.282a6 6 0 0 0 1.227.448a6.4 6.4 0 0 0 1.227-.448c.749-.374 1.148-.812 1.148-1.282c0-.722-.253-1.102-.591-1.336c-.386-.267-.99-.414-1.784-.414s-1.398.147-1.783.414M9.742 12C8.958 11.561 8 10.774 8 9.5c0-1.153.446-2.023 1.239-2.57c.745-.515 1.704-.68 2.636-.68s1.89.165 2.636.68c.793.547 1.239 1.417 1.239 2.57c0 1.274-.957 2.061-1.743 2.5c.786.439 1.743 1.226 1.743 2.5c0 1.153-.446 2.023-1.239 2.57c-.745.515-1.704.68-2.636.68s-1.89-.165-2.636-.68C8.446 16.523 8 15.653 8 14.5c0-1.274.957-2.061 1.743-2.5m2.133.77a6.4 6.4 0 0 0-1.227.448c-.749.374-1.148.812-1.148 1.282c0 .722.253 1.102.591 1.336c.386.266.99.414 1.784.414s1.398-.148 1.784-.414c.338-.234.591-.614.591-1.336c0-.47-.4-.908-1.148-1.282a6 6 0 0 0-1.227-.448"></svg:path>`,
})
export class MynauiEightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightSquareIcon],svg[mynaui-eight-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiEightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightSquareSolidIcon],svg[mynaui-eight-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.008 9.935c0-.597.212-.91.496-1.104c.324-.22.83-.342 1.496-.342s1.172.122 1.496.342c.284.193.496.507.496 1.104c0 .388-.335.75-.963 1.06a5 5 0 0 1-1.029.369a5.5 5.5 0 0 1-1.03-.37c-.627-.31-.962-.67-.962-1.06m1.763 2.764c.091-.027.17-.047.229-.062a5.5 5.5 0 0 1 1.03.37c.627.31.962.67.962 1.06c0 .596-.212.91-.496 1.103c-.324.22-.83.342-1.496.342s-1.172-.122-1.496-.342c-.284-.193-.496-.507-.496-1.104c0-.388.335-.75.963-1.06a5 5 0 0 1 .8-.307"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.75 9.935c0 1.053.803 1.702 1.462 2.065c-.66.363-1.462 1.012-1.462 2.065c0 .952.374 1.671 1.04 2.123c.624.426 1.428.562 2.21.562s1.586-.136 2.21-.562c.666-.452 1.04-1.17 1.04-2.123c0-1.053-.803-1.702-1.462-2.065c.66-.363 1.462-1.012 1.462-2.065c0-.952-.374-1.671-1.04-2.123c-.624-.426-1.428-.562-2.21-.562s-1.586.136-2.21.562c-.666.452-1.04 1.17-1.04 2.123"></svg:path></svg:g>`,
})
export class MynauiEightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightWavesIcon],svg[mynaui-eight-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiEightWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEightWavesSolidIcon],svg[mynaui-eight-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.008 9.935c0-.597.212-.91.496-1.104c.324-.22.83-.342 1.496-.342s1.172.122 1.496.342c.284.193.496.507.496 1.104c0 .388-.335.75-.963 1.06a5 5 0 0 1-1.029.369a5.5 5.5 0 0 1-1.03-.37c-.627-.31-.962-.67-.962-1.06m1.763 2.764c.091-.027.17-.047.229-.062a5.5 5.5 0 0 1 1.03.37c.627.31.962.67.962 1.06c0 .596-.212.91-.496 1.103c-.324.22-.83.342-1.496.342s-1.172-.122-1.496-.342c-.284-.193-.496-.507-.496-1.104c0-.388.335-.75.963-1.06a5 5 0 0 1 .8-.307"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M8.75 9.935c0 1.053.803 1.702 1.462 2.065c-.66.363-1.462 1.012-1.462 2.065c0 .952.374 1.671 1.04 2.123c.624.426 1.428.562 2.21.562s1.586-.136 2.21-.562c.666-.452 1.04-1.17 1.04-2.123c0-1.053-.803-1.702-1.462-2.065c.66-.363 1.462-1.012 1.462-2.065c0-.952-.374-1.671-1.04-2.123c-.624-.426-1.428-.562-2.21-.562s-1.586.136-2.21.562c-.666.452-1.04 1.17-1.04 2.123"></svg:path></svg:g>`,
})
export class MynauiEightWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiElevatorIcon],svg[mynaui-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.294h4.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H12m0-12.706H7.5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2H12m0-12.706V21M7.125 4.588L8.75 3l1.625 1.588M13.625 3l1.625 1.588L16.875 3"></svg:path>`,
})
export class MynauiElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiElevatorSolidIcon],svg[mynaui-elevator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.15 2.464a.75.75 0 1 0-1.05 1.072l1.626 1.589a.75.75 0 0 0 1.048 0L17.4 3.536a.75.75 0 1 0-1.048-1.072L15.25 3.54zm-4.876 0a.75.75 0 0 0-1.048 0L6.6 4.052a.75.75 0 0 0 1.048 1.073L8.75 4.049l1.1 1.076a.75.75 0 0 0 1.05-1.073zM12.75 21.75h3.75A2.75 2.75 0 0 0 19.25 19v-8.706a2.75 2.75 0 0 0-2.75-2.75h-3.75zm-1.5-14.206H7.5a2.75 2.75 0 0 0-2.75 2.75V19a2.75 2.75 0 0 0 2.75 2.75h3.75z"></svg:path>`,
})
export class MynauiElevatorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEnvelopeIcon],svg[mynaui-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.357 7.714l6.98 4.654c.963.641 1.444.962 1.964 1.087c.46.11.939.11 1.398 0c.52-.125 1.001-.446 1.964-1.087l6.98-4.654M7.157 19.5h9.686c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V9.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327H7.157c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311c-.328.642-.328 1.482-.328 3.162v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327"></svg:path>`,
})
export class MynauiEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEnvelopeOpenIcon],svg[mynaui-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.36 7.708v6.989c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.31c.642.328 1.482.328 3.162.328h9.68c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162V7.708m-19.28 0l7.308-4.062c.851-.473 1.277-.71 1.727-.802a3 3 0 0 1 1.21 0c.45.093.876.33 1.727.802l7.308 4.062m-19.28 0l6.978 4.655c.962.641 1.442.962 1.963 1.087c.46.11.939.11 1.398 0c.52-.125 1.002-.446 1.965-1.088l6.976-4.654"></svg:path>`,
})
export class MynauiEnvelopeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEnvelopeOpenSolidIcon],svg[mynaui-envelope-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.453 3.578a2.25 2.25 0 0 0-.907 0c-.311.065-.62.227-1.514.724L3.8 7.767l5.955 3.972c1.01.674 1.362.895 1.721.981a2.25 2.25 0 0 0 1.05 0c.358-.086.71-.307 1.722-.982l5.954-3.971l-6.234-3.465c-.893-.497-1.202-.66-1.514-.724m-1.21-1.468a3.75 3.75 0 0 1 1.512 0c.565.117 1.086.406 1.84.826l.1.056l7.308 4.062a.75.75 0 0 1 .386.655v7.02c0 .814 0 1.47-.044 2c-.044.547-.139 1.027-.365 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.32-1.47.365c-.532.044-1.187.044-2 .044H7.128c-.813 0-1.469 0-2-.044c-.546-.044-1.026-.139-1.47-.365a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47c-.043-.532-.043-1.187-.043-2V7.71a.75.75 0 0 1 .385-.656L9.303 2.99q.051-.03.101-.056c.754-.42 1.275-.71 1.84-.826"></svg:path>`,
})
export class MynauiEnvelopeOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEnvelopeSolidIcon],svg[mynaui-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.125 3.75h9.75c.813 0 1.468 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47q.01.12.016.247a.75.75 0 0 1 .014.336c.013.41.013.879.013 1.417v5.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.532.043-1.187.043-2 .043h-9.75c-.813 0-1.468 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.639-1.639c-.226-.444-.32-.924-.365-1.47c-.044-.531-.044-1.187-.044-2V9.268c0-.538 0-1.007.013-1.417a.75.75 0 0 1 .014-.336q.007-.128.017-.246c.044-.547.139-1.027.365-1.471a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.532-.043 1.187-.043 2-.043M20.85 7.341c-.038-.423-.105-.672-.202-.862a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038H7.157c-.852 0-1.446 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.096.19-.164.439-.202.862l6.604 4.403c1.01.674 1.363.895 1.722.981a2.25 2.25 0 0 0 1.048 0c.36-.086.711-.307 1.723-.981z"></svg:path>`,
})
export class MynauiEnvelopeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroIcon],svg[mynaui-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10H7.12m0 0H4m3.12 0c.55-4.254 3.01-6 7.38-6c2.418 0 4.251.535 5.5 1.733M7.12 10Q7 10.92 7 12t.12 2M14 14H7.12m0 0H4m3.12 0c.55 4.254 3.01 6 7.38 6c2.418 0 4.251-.535 5.5-1.733"></svg:path>`,
})
export class MynauiEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroCircleIcon],svg[mynaui-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroCircleSolidIcon],svg[mynaui-euro-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.611-3.23c-.59.708-.937 1.583-1.06 2.48h-.8A.75.75 0 0 0 7 12.75h.812c.339 2.069 2.044 4 4.438 4c1.305 0 2.448-.287 3.27-1.075a.75.75 0 1 0-1.04-1.083c-.427.41-1.117.658-2.23.658c-1.432 0-2.593-1.134-2.913-2.5H12a.75.75 0 0 0 0-1.5H9.321c.11-.573.345-1.102.693-1.52c.481-.578 1.207-.98 2.236-.98c1.113 0 1.803.248 2.23.658a.75.75 0 1 0 1.04-1.083c-.822-.788-1.965-1.075-3.27-1.075c-1.471 0-2.62.598-3.389 1.52"></svg:path>`,
})
export class MynauiEuroCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroDiamondIcon],svg[mynaui-euro-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroDiamondSolidIcon],svg[mynaui-euro-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M8.861 8.77c-.59.708-.937 1.583-1.06 2.48h-.8A.75.75 0 0 0 7 12.75h.812c.339 2.069 2.044 4 4.438 4c1.305 0 2.448-.287 3.27-1.075a.75.75 0 1 0-1.04-1.083c-.427.41-1.117.658-2.23.658c-1.432 0-2.593-1.134-2.913-2.5H12a.75.75 0 0 0 0-1.5H9.321c.11-.573.345-1.102.693-1.52c.481-.578 1.207-.98 2.236-.98c1.113 0 1.803.248 2.23.658a.75.75 0 1 0 1.04-1.083c-.822-.788-1.965-1.075-3.27-1.075c-1.471 0-2.62.598-3.389 1.52"></svg:path>`,
})
export class MynauiEuroDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroHexagonIcon],svg[mynaui-euro-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroHexagonSolidIcon],svg[mynaui-euro-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM8.861 8.77c-.59.708-.937 1.583-1.06 2.48h-.8A.75.75 0 0 0 7 12.75h.812c.339 2.069 2.044 4 4.438 4c1.305 0 2.448-.287 3.27-1.075a.75.75 0 1 0-1.04-1.083c-.427.41-1.117.658-2.23.658c-1.432 0-2.593-1.134-2.913-2.5H12a.75.75 0 0 0 0-1.5H9.321c.11-.573.345-1.102.693-1.52c.481-.578 1.207-.98 2.236-.98c1.113 0 1.803.248 2.23.658a.75.75 0 1 0 1.04-1.083c-.822-.788-1.965-1.075-3.27-1.075c-1.471 0-2.62.598-3.389 1.52"></svg:path>`,
})
export class MynauiEuroHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroOctagonIcon],svg[mynaui-euro-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroOctagonSolidIcon],svg[mynaui-euro-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M8.86 8.77c-.59.708-.937 1.583-1.06 2.48H7a.75.75 0 0 0 0 1.5h.812c.339 2.069 2.044 4 4.438 4c1.305 0 2.448-.287 3.27-1.075a.75.75 0 1 0-1.04-1.083c-.427.41-1.117.658-2.23.658c-1.432 0-2.593-1.134-2.913-2.5H12a.75.75 0 0 0 0-1.5H9.321c.11-.573.345-1.102.693-1.52c.481-.578 1.207-.98 2.236-.98c1.113 0 1.803.248 2.23.658a.75.75 0 1 0 1.04-1.083c-.822-.788-1.965-1.075-3.27-1.075c-1.471 0-2.62.598-3.389 1.52"></svg:path>`,
})
export class MynauiEuroOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroSolidIcon],svg[mynaui-euro-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.914 4.815C10.328 3.702 12.229 3.25 14.5 3.25c2.514 0 4.573.554 6.02 1.942a.75.75 0 1 1-1.04 1.082c-1.05-1.01-2.658-1.524-4.98-1.524c-2.098 0-3.613.421-4.659 1.244c-.877.69-1.506 1.73-1.834 3.256H14a.75.75 0 0 1 0 1.5H7.796q-.046.59-.046 1.25t.046 1.25H14a.75.75 0 0 1 0 1.5H8.007c.328 1.526.957 2.566 1.834 3.256c1.046.823 2.56 1.244 4.659 1.244c2.322 0 3.93-.515 4.98-1.524a.75.75 0 0 1 1.04 1.082c-1.447 1.388-3.506 1.942-6.02 1.942c-2.271 0-4.172-.452-5.586-1.565c-1.289-1.014-2.079-2.5-2.436-4.435H4a.75.75 0 0 1 0-1.5h2.292q-.042-.6-.042-1.25t.042-1.25H4a.75.75 0 0 1 0-1.5h2.478c.357-1.934 1.147-3.42 2.436-4.435"></svg:path>`,
})
export class MynauiEuroSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroSquareIcon],svg[mynaui-euro-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroSquareSolidIcon],svg[mynaui-euro-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-.506 6.52c-.59.708-.937 1.583-1.06 2.48h-.8A.75.75 0 0 0 7 12.75h.812c.339 2.069 2.044 4 4.438 4c1.305 0 2.448-.287 3.27-1.075a.75.75 0 1 0-1.04-1.083c-.427.41-1.117.658-2.23.658c-1.432 0-2.593-1.134-2.913-2.5H12a.75.75 0 0 0 0-1.5H9.321c.11-.573.345-1.102.693-1.52c.481-.578 1.207-.98 2.236-.98c1.113 0 1.803.248 2.23.658a.75.75 0 1 0 1.04-1.083c-.822-.788-1.965-1.075-3.27-1.075c-1.471 0-2.62.598-3.389 1.52"></svg:path>`,
})
export class MynauiEuroSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroWavesIcon],svg[mynaui-euro-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroWavesSolidIcon],svg[mynaui-euro-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M8.861 8.77c-.59.708-.937 1.583-1.06 2.48h-.8A.75.75 0 0 0 7 12.75h.812c.339 2.069 2.044 4 4.438 4c1.305 0 2.448-.287 3.27-1.075a.75.75 0 1 0-1.04-1.083c-.427.41-1.117.658-2.23.658c-1.432 0-2.593-1.134-2.913-2.5H12a.75.75 0 0 0 0-1.5H9.321c.11-.573.345-1.102.693-1.52c.481-.578 1.207-.98 2.236-.98c1.113 0 1.803.248 2.23.658a.75.75 0 1 0 1.04-1.083c-.822-.788-1.965-1.075-3.27-1.075c-1.471 0-2.62.598-3.389 1.52"></svg:path>`,
})
export class MynauiEuroWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiExcludeIcon],svg[mynaui-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.4 15.6H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6.6a3 3 0 0 1 3 3v2.4m-7.2 7.2V18a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3v-6.6a3 3 0 0 0-3-3h-2.4m-7.2 7.2v-1.8m0 1.8h1.8m5.4-7.2h-1.8m1.8 0v1.8m-7.2 0a1.8 1.8 0 0 1 1.8-1.8m5.4 5.4a1.8 1.8 0 0 1-1.8 1.8"></svg:path>`,
})
export class MynauiExcludeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiExcludeSolidIcon],svg[mynaui-exclude-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6A3.75 3.75 0 0 1 6 2.25h6.6A3.75 3.75 0 0 1 16.35 6v1.65H18a3.75 3.75 0 0 1 3.75 3.75V18A3.75 3.75 0 0 1 18 21.75h-6.6A3.75 3.75 0 0 1 7.65 18v-1.65H6a3.75 3.75 0 0 1-3.75-3.75zm6.9 8.85h1.05a.75.75 0 0 1 0 1.5H9.15V18a2.25 2.25 0 0 0 2.25 2.25H18A2.25 2.25 0 0 0 20.25 18v-6.6A2.25 2.25 0 0 0 18 9.15h-1.65v1.05a.75.75 0 0 1-1.5 0V9.15H13.8a.75.75 0 0 1 0-1.5h1.05V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v6.6A2.25 2.25 0 0 0 6 14.85h1.65V13.8a.75.75 0 0 1 1.5 0zm1.05-5.7c-.58 0-1.05.47-1.05 1.05a.75.75 0 0 1-1.5 0a2.55 2.55 0 0 1 2.55-2.55a.75.75 0 0 1 0 1.5m5.4 3.9a.75.75 0 0 1 .75.75a2.55 2.55 0 0 1-2.55 2.55a.75.75 0 0 1 0-1.5c.58 0 1.05-.47 1.05-1.05a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiExcludeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiExternalLinkIcon],svg[mynaui-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1"></svg:path>`,
})
export class MynauiExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiExternalLinkSolidIcon],svg[mynaui-external-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25H9.4a.75.75 0 0 1 0 1.5c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-1.1a.75.75 0 0 1 1.5 0v1.133c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M13.5 3a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V4.81l-6.97 6.97a.75.75 0 1 1-1.06-1.06l6.97-6.97h-4.94A.75.75 0 0 1 13.5 3"></svg:path>`,
})
export class MynauiExternalLinkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEyeIcon],svg[mynaui-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.55 13.406c-.272-.373-.408-.56-.502-.92a2.5 2.5 0 0 1 0-.971c.094-.361.23-.548.502-.92C4.039 8.55 7.303 5 12 5s7.961 3.55 9.45 5.594c.272.373.408.56.502.92a2.5 2.5 0 0 1 0 .971c-.094.361-.23.548-.502.92C19.961 15.45 16.697 19 12 19s-7.961-3.55-9.45-5.594"></svg:path><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class MynauiEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEyeSlashIcon],svg[mynaui-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.55 13.406c-.272-.373-.408-.56-.502-.92a2.5 2.5 0 0 1 0-.971c.094-.361.23-.548.502-.92C4.039 8.55 7.303 5 12 5s7.961 3.55 9.45 5.594c.272.373.408.56.502.92a2.5 2.5 0 0 1 0 .971c-.094.361-.23.548-.502.92C19.961 15.45 16.697 19 12 19s-7.961-3.55-9.45-5.594"></svg:path><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9-11L3 21"></svg:path></svg:g>`,
})
export class MynauiEyeSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEyeSlashSolidIcon],svg[mynaui-eye-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 0-1.06 0l-3.227 3.227C15.762 4.847 14.007 4.25 12 4.25c-5.082 0-8.542 3.824-10.057 5.903l-.023.031c-.258.355-.468.643-.598 1.142A2.8 2.8 0 0 0 1.25 12c0 .21.017.462.072.674c.13.5.34.787.598 1.142l.023.031c.734 1.007 1.924 2.423 3.533 3.616L2.47 20.47a.75.75 0 1 0 1.06 1.06l3.227-3.227c1.481.85 3.236 1.447 5.243 1.447c5.082 0 8.542-3.824 10.057-5.903l.023-.031c.258-.355.468-.643.598-1.142A2.8 2.8 0 0 0 22.75 12c0-.21-.017-.462-.072-.674c-.13-.5-.34-.787-.598-1.142l-.023-.031c-.734-1.007-1.924-2.423-3.533-3.616L21.53 3.53a.75.75 0 0 0 0-1.06m-8.19 7.128l-3.742 3.743a2.75 2.75 0 0 1 3.742-3.742M14.75 12a2.75 2.75 0 0 1-4.09 2.402l3.742-3.743c.222.397.348.854.348 1.341"></svg:path>`,
})
export class MynauiEyeSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiEyeSolidIcon],svg[mynaui-eye-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M1.943 10.153C3.458 8.074 6.918 4.25 12 4.25s8.542 3.824 10.057 5.903l.023.031c.258.355.468.643.598 1.142c.055.212.072.464.072.674s-.017.462-.072.674c-.13.5-.34.787-.598 1.142l-.023.031C20.542 15.926 17.082 19.75 12 19.75s-8.542-3.824-10.057-5.903l-.023-.031c-.258-.355-.468-.643-.598-1.142A2.8 2.8 0 0 1 1.25 12c0-.21.017-.462.072-.674c.13-.5.34-.787.598-1.142zM9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:g>`,
})
export class MynauiEyeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFaceIdIcon],svg[mynaui-face-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 13.75h1v-4m4-.25V8m-7 8.5c1.5 1.5 4.5 1.5 6 0m-7-7V8m1.4 13c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6m18 0c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21m0-18c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4"></svg:path>`,
})
export class MynauiFaceIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFaceIdSolidIcon],svg[mynaui-face-id-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25H9.4a.75.75 0 0 1 0 1.5c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566a.75.75 0 0 1-1.5 0v-.033c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m7.8 1.552c-.63-.051-1.435-.052-2.567-.052a.75.75 0 0 1 0-1.5h.033c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655V9.4a.75.75 0 0 1-1.5 0c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302M8 7.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25m8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 9a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h.25V9.75A.75.75 0 0 1 12 9m-9 4.85a.75.75 0 0 1 .75.75c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052a.75.75 0 0 1 0 1.5h-.033c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V14.6a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v.033c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H14.6a.75.75 0 0 1 0-1.5c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566a.75.75 0 0 1 .75-.75M8.47 15.97a.75.75 0 0 1 1.06 0c.578.577 1.494.905 2.47.905s1.892-.328 2.47-.905a.75.75 0 1 1 1.06 1.06c-.922.923-2.256 1.345-3.53 1.345s-2.608-.422-3.53-1.345a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiFaceIdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownIcon],svg[mynaui-fat-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.483 13.105c-.43 0-.645.545-.34.863l7.516 6.884a.466.466 0 0 0 .682 0l7.517-6.884c.304-.318.088-.863-.341-.863H15.68a.495.495 0 0 1-.483-.506V3.506A.494.494 0 0 0 14.716 3H9.284a.494.494 0 0 0-.482.506v9.093c0 .28-.216.506-.483.506z"></svg:path>`,
})
export class MynauiFatArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownLeftIcon],svg[mynaui-fat-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.932 18.963c.315.315-.062 1.026-.519 1.037H5.66c-.58 0-.871 0-1.093-.113a1.04 1.04 0 0 1-.454-.454C4 19.213 4 18.922 4 18.34V8.587c.01-.457.722-.834 1.038-.519l2.714 2.78c.195.195.52.187.725-.018l6.671-6.671a.513.513 0 0 1 .725-.017l3.985 3.985a.513.513 0 0 1-.017.725l-6.671 6.671a.513.513 0 0 0-.017.725z"></svg:path>`,
})
export class MynauiFatArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownLeftSolidIcon],svg[mynaui-fat-arrow-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.618 3.629c.474-.474 1.274-.53 1.785-.018l3.986 3.986c.512.511.456 1.311-.018 1.785l-6.51 6.51l2.601 2.54c.498.498.342 1.165.167 1.505c-.181.355-.591.798-1.198.813H5.633c-.267 0-.511 0-.715-.017a1.8 1.8 0 0 1-.692-.178a1.8 1.8 0 0 1-.781-.781a1.8 1.8 0 0 1-.178-.692c-.017-.204-.017-.448-.017-.716V8.57c.015-.607.458-1.017.813-1.198c.34-.175 1.007-.33 1.505.167l.006.006l2.534 2.594z"></svg:path>`,
})
export class MynauiFatArrowDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownRightIcon],svg[mynaui-fat-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.068 18.963c-.315.315.062 1.026.519 1.037h9.753c.58 0 .872 0 1.093-.113c.196-.1.354-.258.454-.454c.113-.221.113-.512.113-1.093V8.587c-.01-.457-.722-.834-1.038-.519l-2.714 2.78a.513.513 0 0 1-.725-.018L8.852 4.16a.513.513 0 0 0-.725-.017L4.142 8.127a.513.513 0 0 0 .017.725l6.671 6.671c.205.205.213.53.017.725z"></svg:path>`,
})
export class MynauiFatArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownRightSolidIcon],svg[mynaui-fat-arrow-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.596 3.611c.512-.512 1.312-.456 1.786.018l6.51 6.51l2.54-2.601c.498-.498 1.165-.342 1.505-.167c.355.181.798.591.813 1.198v9.798c0 .267 0 .511-.017.715c-.018.22-.059.458-.178.692c-.171.336-.445.61-.781.781c-.235.12-.472.16-.692.178c-.204.017-.448.017-.716.017H8.57c-.607-.015-1.017-.458-1.198-.813c-.175-.34-.331-1.007.167-1.505l.006-.006l2.594-2.534l-6.51-6.51c-.473-.474-.529-1.274-.017-1.785z"></svg:path>`,
})
export class MynauiFatArrowDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowDownSolidIcon],svg[mynaui-fat-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.716 2.25H9.284c-.714 0-1.232.596-1.232 1.256v8.849H4.483c-1.161 0-1.592 1.387-.884 2.13l.037.036l7.502 6.87a1.216 1.216 0 0 0 1.724 0l7.502-6.87l.037-.035c.708-.744.277-2.131-.884-2.131h-3.569v-8.85c0-.659-.518-1.255-1.232-1.255"></svg:path>`,
})
export class MynauiFatArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowLeftIcon],svg[mynaui-fat-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.895 4.483c0-.43-.545-.645-.863-.34l-6.884 7.516a.467.467 0 0 0 0 .682l6.884 7.517c.318.304.863.088.863-.341V15.68c0-.267.227-.483.506-.483h9.093c.28 0 .506-.216.506-.482V9.284a.494.494 0 0 0-.506-.482h-9.093a.494.494 0 0 1-.506-.483z"></svg:path>`,
})
export class MynauiFatArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowLeftSolidIcon],svg[mynaui-fat-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.645 4.483c0-1.16-1.387-1.592-2.13-.884l-.036.037l-6.87 7.502a1.216 1.216 0 0 0 0 1.724l6.87 7.502l.035.037c.744.708 2.131.277 2.131-.884v-3.569h8.85c.659 0 1.255-.518 1.255-1.232V9.284c0-.714-.596-1.232-1.256-1.232h-8.849z"></svg:path>`,
})
export class MynauiFatArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowRightIcon],svg[mynaui-fat-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.105 4.483c0-.43.545-.645.863-.34l6.884 7.516a.466.466 0 0 1 0 .682l-6.884 7.517c-.318.304-.863.088-.863-.341V15.68a.495.495 0 0 0-.506-.483H3.506A.494.494 0 0 1 3 14.716V9.284c0-.266.226-.482.506-.482h9.093c.28 0 .506-.216.506-.483z"></svg:path>`,
})
export class MynauiFatArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowRightSolidIcon],svg[mynaui-fat-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.486 3.6c-.744-.71-2.131-.278-2.131.883v3.569h-8.85c-.659 0-1.255.518-1.255 1.232v5.432c0 .714.596 1.232 1.256 1.232h8.849v3.569c0 1.16 1.387 1.592 2.13.884l.036-.037l6.87-7.502a1.216 1.216 0 0 0 0-1.724l-6.87-7.502z"></svg:path>`,
})
export class MynauiFatArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpIcon],svg[mynaui-fat-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.483 10.895c-.43 0-.645-.545-.34-.863l7.516-6.884a.467.467 0 0 1 .682 0l7.517 6.884c.304.318.088.863-.341.863H15.68a.495.495 0 0 0-.483.506v9.093c0 .28-.216.506-.482.506H9.284a.494.494 0 0 1-.482-.506v-9.093a.495.495 0 0 0-.483-.506z"></svg:path>`,
})
export class MynauiFatArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpLeftIcon],svg[mynaui-fat-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.932 5.038c.315-.316-.062-1.027-.519-1.038H5.66c-.58 0-.871 0-1.093.113a1.04 1.04 0 0 0-.454.453C4 4.789 4 5.08 4 5.66v9.753c.01.457.722.834 1.038.519l2.714-2.78a.513.513 0 0 1 .725.018l6.671 6.671c.205.205.53.213.725.017l3.985-3.985a.513.513 0 0 0-.017-.725L13.17 8.477a.513.513 0 0 1-.017-.725z"></svg:path>`,
})
export class MynauiFatArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpLeftSolidIcon],svg[mynaui-fat-arrow-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.634 3.25h9.797c.607.015 1.017.458 1.198.813c.175.34.331 1.007-.167 1.505l-.006.006l-2.594 2.534l6.51 6.51c.473.474.529 1.274.017 1.786l-3.986 3.985c-.511.512-1.311.456-1.785-.018l-6.51-6.51l-2.54 2.601c-.498.498-1.165.342-1.505.167c-.355-.181-.798-.591-.813-1.198V5.634c0-.268 0-.513.017-.716c.018-.22.059-.458.178-.692c.171-.336.445-.61.781-.781a1.8 1.8 0 0 1 .692-.178a9 9 0 0 1 .716-.017"></svg:path>`,
})
export class MynauiFatArrowUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpRightIcon],svg[mynaui-fat-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.068 5.038C7.753 4.722 8.13 4.01 8.587 4h9.753c.581 0 .872 0 1.093.113c.196.1.354.258.454.453C20 4.789 20 5.08 20 5.66v9.753c-.01.457-.722.834-1.038.519l-2.714-2.78a.513.513 0 0 0-.725.018l-6.671 6.67a.513.513 0 0 1-.725.017l-3.985-3.985a.513.513 0 0 1 .017-.725l6.671-6.671a.513.513 0 0 0 .018-.725z"></svg:path>`,
})
export class MynauiFatArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpRightSolidIcon],svg[mynaui-fat-arrow-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.083 3.267a1.8 1.8 0 0 1 .691.178c.336.171.61.445.781.781c.12.234.16.472.178.692c.017.203.017.448.017.716v9.797c-.015.607-.458 1.017-.812 1.198c-.341.175-1.008.33-1.506-.167l-.006-.006l-2.534-2.594l-6.51 6.51c-.473.473-1.273.529-1.785.017L3.61 16.404c-.511-.512-.456-1.312.018-1.786l6.51-6.51l-2.601-2.54c-.498-.498-.342-1.165-.167-1.505c.181-.355.591-.798 1.198-.813h9.798c.267 0 .512 0 .715.017"></svg:path>`,
})
export class MynauiFatArrowUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatArrowUpSolidIcon],svg[mynaui-fat-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.138 2.608a1.216 1.216 0 0 1 1.724 0l7.502 6.87l.037.036c.708.744.277 2.131-.884 2.131h-3.569v8.85c0 .659-.518 1.255-1.232 1.255H9.284c-.714 0-1.232-.596-1.232-1.256v-8.849H4.483c-1.161 0-1.592-1.387-.884-2.13l.037-.036z"></svg:path>`,
})
export class MynauiFatArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownLeftIcon],svg[mynaui-fat-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4.077q-3.303 4.216-5.866 4.785q-2.564.569-4.88.172V4L3 12.214L10.253 20v-4.784Q14.54 15.18 17.54 12T21 4.077"></svg:path>`,
})
export class MynauiFatCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownLeftSolidIcon],svg[mynaui-fat-corner-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.003 4a.75.75 0 0 0-1.312-.496l-7.253 8.214a.75.75 0 0 0 .013 1.007l7.253 7.786a.75.75 0 0 0 1.3-.511v-4.063c2.747-.194 5.118-1.342 7.08-3.422c2.126-2.253 3.341-5.054 3.663-8.365a.75.75 0 0 0-1.337-.535c-2.188 2.793-4.004 4.197-5.438 4.515c-1.393.309-2.714.39-3.969.252z"></svg:path>`,
})
export class MynauiFatCornerDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownRightIcon],svg[mynaui-fat-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.077q3.303 4.216 5.866 4.785q2.564.569 4.88.172V4L21 12.214L13.747 20v-4.784Q9.46 15.18 6.46 12T3 4.077"></svg:path>`,
})
export class MynauiFatCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownRightSolidIcon],svg[mynaui-fat-corner-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.309 3.504A.75.75 0 0 0 12.997 4v4.382c-1.255.138-2.576.057-3.969-.252c-1.434-.318-3.25-1.722-5.438-4.515a.75.75 0 0 0-1.336.535c.32 3.311 1.536 6.112 3.661 8.365c1.963 2.08 4.334 3.228 7.082 3.422V20a.75.75 0 0 0 1.299.511l7.253-7.786a.75.75 0 0 0 .013-1.008z"></svg:path>`,
})
export class MynauiFatCornerDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftDownIcon],svg[mynaui-fat-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.923 3q-4.216 3.303-4.785 5.866q-.569 2.564-.172 4.88H20L11.786 21L4 13.747h4.784Q8.82 9.46 12 6.46T19.923 3"></svg:path>`,
})
export class MynauiFatCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftDownSolidIcon],svg[mynaui-fat-corner-left-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 2.721a.75.75 0 0 1-.235.87c-2.793 2.187-4.196 4.003-4.515 5.437c-.309 1.393-.39 2.714-.252 3.969H20a.75.75 0 0 1 .497 1.312l-8.214 7.253a.75.75 0 0 1-1.008-.013l-7.786-7.253a.75.75 0 0 1 .511-1.3h4.064c.193-2.747 1.341-5.118 3.421-7.08c2.253-2.126 5.054-3.341 8.366-3.663a.75.75 0 0 1 .768.468"></svg:path>`,
})
export class MynauiFatCornerLeftDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftUpIcon],svg[mynaui-fat-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.923 21q-4.216-3.303-4.785-5.866q-.569-2.564-.172-4.88H20L11.786 3L4 10.253h4.784Q8.82 14.54 12 17.54T19.923 21"></svg:path>`,
})
export class MynauiFatCornerLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftUpSolidIcon],svg[mynaui-fat-corner-left-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.283 2.438a.75.75 0 0 0-1.008.013L3.489 9.704a.75.75 0 0 0 .511 1.3h4.064c.193 2.747 1.341 5.118 3.421 7.08c2.253 2.126 5.054 3.341 8.366 3.663a.75.75 0 0 0 .534-1.337c-2.793-2.188-4.196-4.004-4.515-5.438c-.309-1.393-.39-2.714-.252-3.969H20a.75.75 0 0 0 .497-1.312z"></svg:path>`,
})
export class MynauiFatCornerLeftUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightDownIcon],svg[mynaui-fat-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.077 3q4.216 3.303 4.785 5.866q.569 2.564.172 4.88H4L12.214 21L20 13.747h-4.784Q15.18 9.46 12 6.46T4.077 3"></svg:path>`,
})
export class MynauiFatCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightDownSolidIcon],svg[mynaui-fat-corner-right-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.15 2.253a.75.75 0 0 0-.535 1.337C6.408 5.778 7.812 7.594 8.13 9.028c.309 1.393.39 2.714.252 3.969H4a.75.75 0 0 0-.496 1.312l8.214 7.253a.75.75 0 0 0 1.007-.013l7.786-7.253a.75.75 0 0 0-.511-1.3h-4.063c-.194-2.747-1.342-5.118-3.422-7.08C10.262 3.79 7.46 2.574 4.15 2.252"></svg:path>`,
})
export class MynauiFatCornerRightDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightUpIcon],svg[mynaui-fat-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.077 21q4.216-3.303 4.785-5.866q.569-2.564.172-4.88H4L12.214 3L20 10.253h-4.784Q15.18 14.54 12 17.54T4.077 21"></svg:path>`,
})
export class MynauiFatCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightUpSolidIcon],svg[mynaui-fat-corner-right-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 2.451a.75.75 0 0 0-1.007-.013L3.504 9.69A.75.75 0 0 0 4 11.003h4.382c.138 1.255.057 2.576-.252 3.969c-.318 1.434-1.722 3.25-4.515 5.438a.75.75 0 0 0 .535 1.337c3.311-.322 6.112-1.537 8.365-3.662c2.08-1.963 3.228-4.334 3.422-7.082H20a.75.75 0 0 0 .511-1.299z"></svg:path>`,
})
export class MynauiFatCornerRightUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpLeftIcon],svg[mynaui-fat-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19.923q-3.303-4.216-5.866-4.785q-2.564-.569-4.88-.172V20L3 11.786L10.253 4v4.784Q14.54 8.82 17.54 12T21 19.923"></svg:path>`,
})
export class MynauiFatCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpLeftSolidIcon],svg[mynaui-fat-corner-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.003 4a.75.75 0 0 0-1.299-.511l-7.253 7.786a.75.75 0 0 0-.013 1.008l7.253 8.213A.75.75 0 0 0 11.003 20v-4.382c1.255-.138 2.576-.057 3.969.252c1.434.319 3.25 1.722 5.438 4.515a.75.75 0 0 0 1.337-.535c-.322-3.311-1.537-6.113-3.662-8.365c-1.963-2.08-4.334-3.228-7.082-3.421z"></svg:path>`,
})
export class MynauiFatCornerUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpRightIcon],svg[mynaui-fat-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19.923q3.303-4.216 5.866-4.785q2.564-.569 4.88-.172V20L21 11.786L13.747 4v4.784Q9.46 8.82 6.46 12T3 19.923"></svg:path>`,
})
export class MynauiFatCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpRightSolidIcon],svg[mynaui-fat-corner-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.296 3.489a.75.75 0 0 0-1.3.511v4.064c-2.747.193-5.118 1.341-7.08 3.421c-2.126 2.253-3.341 5.054-3.662 8.366a.75.75 0 0 0 1.336.534c2.188-2.793 4.004-4.196 5.438-4.515c1.393-.309 2.714-.39 3.969-.252V20a.75.75 0 0 0 1.312.496l7.253-8.213a.75.75 0 0 0-.013-1.008z"></svg:path>`,
})
export class MynauiFatCornerUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFemaleIcon],svg[mynaui-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v6m-2-2h4"></svg:path>`,
})
export class MynauiFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFemaleSolidIcon],svg[mynaui-female-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a6.75 6.75 0 0 0-.75 13.459v2.541H10a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25v-2.541A6.751 6.751 0 0 0 12 2.25"></svg:path>`,
})
export class MynauiFemaleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileIcon],svg[mynaui-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"></svg:path>`,
})
export class MynauiFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileCheckIcon],svg[mynaui-file-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"></svg:path><svg:path d="m10 16.242l1.039 1.181c.095.109.267.1.351-.016L13.5 14.5"></svg:path></svg:g>`,
})
export class MynauiFileCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileCheckSolidIcon],svg[mynaui-file-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V12c0-1.082-.392-2.226-.983-3.303c-.597-1.086-1.424-2.153-2.364-3.092s-2.008-1.77-3.098-2.368c-1.082-.594-2.234-.987-3.327-.987zm7.592 4.415a13 13 0 0 1 1.89 2.373A3 3 0 0 0 16.5 9h-2.25a1.5 1.5 0 0 1-1.5-1.5V5.25q0-.245-.039-.48c.822.5 1.64 1.154 2.381 1.895m-1.152 7.228a.75.75 0 0 1 .167 1.047l-2.11 2.908a.976.976 0 0 1-1.521.07l-1.04-1.18a.75.75 0 0 1 1.127-.991l.606.689l1.724-2.376a.75.75 0 0 1 1.047-.167"></svg:path>`,
})
export class MynauiFileCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileMinusIcon],svg[mynaui-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 16h4M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"></svg:path>`,
})
export class MynauiFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileMinusSolidIcon],svg[mynaui-file-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V12c0-1.082-.392-2.226-.983-3.303c-.597-1.086-1.424-2.153-2.364-3.092s-2.008-1.77-3.098-2.368c-1.082-.594-2.234-.987-3.327-.987zm7.592 4.415a13 13 0 0 1 1.89 2.373A3 3 0 0 0 16.5 9h-2.25a1.5 1.5 0 0 1-1.5-1.5V5.25q0-.245-.039-.48c.822.5 1.64 1.154 2.381 1.895M10 15.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiFileMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilePlusIcon],svg[mynaui-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 15.5h4m-2-2v4M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"></svg:path>`,
})
export class MynauiFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilePlusSolidIcon],svg[mynaui-file-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V12c0-1.082-.392-2.226-.983-3.303c-.597-1.086-1.424-2.153-2.364-3.092s-2.008-1.77-3.098-2.368c-1.082-.594-2.234-.987-3.327-.987zm7.592 4.415a13 13 0 0 1 1.89 2.373A3 3 0 0 0 16.5 9h-2.25a1.5 1.5 0 0 1-1.5-1.5V5.25q0-.245-.039-.48c.822.5 1.64 1.154 2.381 1.895M12 12.75a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V13.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiFilePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileSolidIcon],svg[mynaui-file-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5.25a3 3 0 0 1 3-3h2.228c1.093 0 2.245.393 3.327.987c1.09.598 2.159 1.428 3.098 2.368s1.767 2.006 2.364 3.092c.591 1.077.983 2.221.983 3.303v6.75a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm12.481 3.788a13 13 0 0 0-1.889-2.373a13 13 0 0 0-2.38-1.894q.038.234.038.479V7.5a1.5 1.5 0 0 0 1.5 1.5h2.25q.246 0 .481.038"></svg:path>`,
})
export class MynauiFileSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileTextIcon],svg[mynaui-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.478 3H7.25A2.25 2.25 0 0 0 5 5.25v13.5A2.25 2.25 0 0 0 7.25 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.478 3c1.243 0 2.272 1.007 2.272 2.25V7.5A2.25 2.25 0 0 0 14 9.75h2.25A2.25 2.25 0 0 1 18.5 12M9.478 3c3.69 0 9.022 5.36 9.022 9M9 16.5h6m-6-3h4"></svg:path>`,
})
export class MynauiFileTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileTextSolidIcon],svg[mynaui-file-text-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25h2.228c1.093 0 2.245.393 3.327.987c1.09.598 2.159 1.428 3.098 2.368s1.767 2.006 2.364 3.092c.591 1.077.983 2.221.983 3.303v6.75a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3m7.592 4.415a13 13 0 0 0-2.38-1.894q.038.234.038.479V7.5a1.5 1.5 0 0 0 1.5 1.5h2.25q.246 0 .481.038a13 13 0 0 0-1.889-2.373M9 12.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiFileTextSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileXIcon],svg[mynaui-file-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.5 14.5l2.828 2.828m0-2.828L10.5 17.328M9.728 3H7.5a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5a2.25 2.25 0 0 0 2.25 2.25h2.25A2.25 2.25 0 0 1 18.75 12M9.728 3c3.69 0 9.022 5.36 9.022 9"></svg:path>`,
})
export class MynauiFileXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFileXSolidIcon],svg[mynaui-file-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.25a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V12c0-1.082-.392-2.226-.983-3.303c-.597-1.086-1.424-2.153-2.364-3.092s-2.008-1.77-3.098-2.368c-1.082-.594-2.234-.987-3.327-.987zm7.592 4.415a13 13 0 0 1 1.89 2.373A3 3 0 0 0 16.5 9h-2.25a1.5 1.5 0 0 1-1.5-1.5V5.25q0-.245-.039-.48c.822.5 1.64 1.154 2.381 1.895M9.97 13.97a.75.75 0 0 1 1.06 0l.884.884l.884-.884a.75.75 0 0 1 1.06 1.06l-.883.884l.884.884a.75.75 0 0 1-1.06 1.06l-.885-.883l-.884.884a.75.75 0 1 1-1.06-1.06l.884-.885l-.884-.884a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiFileXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilmIcon],svg[mynaui-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.4 3.468v17.064m9-17.064v17.064M7.401 7.473H3.486M7.401 12H3.027m4.374 4.473H3.432m17.469-9h-3.915M20.901 12h-4.374m-.054 0h-9.9m14.328 4.473h-3.969M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12"></svg:path>`,
})
export class MynauiFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilmSolidIcon],svg[mynaui-film-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 2.25h.114c2.073 0 3.705 0 4.98.171c1.31.176 2.354.545 3.175 1.367c.822.821 1.19 1.866 1.367 3.174l.033.271a.75.75 0 0 1 .033.334c.105 1.175.105 2.617.105 4.376v.114c0 1.744 0 3.177-.102 4.347a.8.8 0 0 1-.027.28q-.02.18-.042.354c-.176 1.308-.545 2.353-1.367 3.174c-.821.822-1.866 1.19-3.174 1.367c-1.276.171-2.908.171-4.981.171h-.114c-2.073 0-3.705 0-4.98-.171c-1.31-.176-2.354-.545-3.175-1.367c-.822-.821-1.19-1.866-1.367-3.174c-.171-1.276-.171-2.908-.171-4.981v-.114c0-2.073 0-3.705.171-4.98c.176-1.31.545-2.354 1.367-3.175c.821-.822 1.866-1.19 3.174-1.367c1.276-.171 2.908-.171 4.981-.171m8.25 13.473c.047-.823.055-1.797.057-2.973h-3.1v2.973zm-3.042 1.5v2.821c.956-.163 1.551-.443 2-.892c.439-.438.716-1.015.88-1.929zm-10.5 2.785v-2.785H3.968c.165.914.442 1.49.88 1.929c.418.417.961.689 1.803.856m-2.844-4.285h2.844V12.75h-2.9c0 1.176.01 2.15.056 2.973M3.75 11.25h2.9V8.223H3.81c-.05.834-.058 1.825-.06 3.027m.228-4.527h2.673v-2.73c-.842.166-1.385.438-1.803.855c-.429.43-.704.992-.87 1.875m13.173-2.767v2.767h2.87c-.165-.883-.44-1.445-.87-1.875c-.449-.449-1.044-.73-2-.892m3.039 4.267h-3.04v3.027h3.1c-.002-1.202-.01-2.193-.06-3.027"></svg:path>`,
})
export class MynauiFilmSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilterIcon],svg[mynaui-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 7h15M7 12h10m-7 5h4"></svg:path>`,
})
export class MynauiFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilterOneIcon],svg[mynaui-filter-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.046 17.676v-3.918c0-.554 0-.832-.05-1.1a3 3 0 0 0-.219-.686c-.114-.247-.274-.474-.595-.926L5.935 6.467c-.566-.797-.849-1.196-.836-1.529a.98.98 0 0 1 .38-.735C5.743 4 6.232 4 7.21 4h9.581c.978 0 1.467 0 1.73.203a.97.97 0 0 1 .38.735c.014.333-.27.732-.835 1.53l-3.247 4.578c-.32.452-.481.679-.595.926a3 3 0 0 0-.22.687c-.05.267-.05.544-.05 1.1v5.871m-3.907-1.954c1.654-.732 3.908-.296 3.908 1.954m-3.908-1.954c-.033 2.235 2.262 2.792 3.908 1.954"></svg:path>`,
})
export class MynauiFilterOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilterOneSolidIcon],svg[mynaui-filter-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.175 3.25h9.65c.46 0 .855 0 1.167.028c.31.029.679.094.986.33c.406.313.652.79.672 1.3c.015.389-.145.727-.301.997c-.157.27-.386.593-.652.968L15.43 11.48c-.337.474-.448.636-.526.806a2.2 2.2 0 0 0-.163.51c-.034.184-.037.38-.037.962v5.872a.75.75 0 0 1-.41.668c-.99.505-2.203.608-3.205.202c-1.057-.427-1.812-1.401-1.793-2.829v-3.913c0-.582-.003-.778-.037-.961a2.2 2.2 0 0 0-.163-.511c-.078-.17-.19-.332-.526-.806L5.303 6.873a14 14 0 0 1-.652-.968c-.156-.27-.316-.608-.301-.996c.02-.512.266-.988.672-1.3c.307-.237.676-.302.986-.33c.312-.029.708-.029 1.167-.029m3.673 14.94c.119.485.427.767.804.92c.423.171.97.188 1.499.035a1.3 1.3 0 0 0-.194-.448a1.27 1.27 0 0 0-.608-.463c-.418-.162-.963-.178-1.5-.043"></svg:path>`,
})
export class MynauiFilterOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFilterSolidIcon],svg[mynaui-filter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 7a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 7m2.5 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiFilterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFineTuneIcon],svg[mynaui-fine-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 8.5h11m-18 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 7h11m3 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class MynauiFineTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFineTuneSolidIcon],svg[mynaui-fine-tune-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 8.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m-7 7a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M5 5.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m14 7a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path>`,
})
export class MynauiFineTuneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFireIcon],svg[mynaui-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.27 16.202A7.81 7.81 0 0 1 12.06 21c-4.313 0-7.81-3.492-7.81-7.8S5.89 7.13 8.455 3c4.806 2.1 4.806 8.4 4.806 8.4s1.579-3.038 4.807-4.5c1.034 3.042 2.43 6.365 1.202 9.302"></svg:path><svg:path d="M12 18a5 5 0 0 1-5-5"></svg:path></svg:g>`,
})
export class MynauiFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFireSolidIcon],svg[mynaui-fire-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.818 2.604a.75.75 0 0 1 .938-.291c2.676 1.17 3.982 3.498 4.618 5.441c.183.562.314 1.1.407 1.58l.1-.12c.844-.996 2.13-2.206 3.877-2.997a.75.75 0 0 1 1.02.441q.142.418.294.853c.437 1.252.906 2.597 1.18 3.928c.34 1.655.405 3.39-.29 5.053a8.56 8.56 0 0 1-7.902 5.258c-4.727 0-8.56-3.827-8.56-8.55c0-3.874 1.296-5.885 3.22-8.868c.346-.539.714-1.109 1.098-1.728M7.75 13a.75.75 0 0 0-1.5 0A5.75 5.75 0 0 0 12 18.75a.75.75 0 0 0 0-1.5A4.25 4.25 0 0 1 7.75 13"></svg:path>`,
})
export class MynauiFireSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveIcon],svg[mynaui-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.375 7c-2.5.625-5.625 0-5.625 0v3.566h3.473c1.534 0 2.777 1.064 2.777 2.377v1.399c0 3.522-6.25 3.566-6.25 0"></svg:path>`,
})
export class MynauiFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveCircleIcon],svg[mynaui-five-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"></svg:path></svg:g>`,
})
export class MynauiFiveCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveCircleSolidIcon],svg[mynaui-five-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75M9.025 7.42A.75.75 0 0 0 8.75 8v2.852a.75.75 0 0 0 .75.75h2.778c.927 0 1.472.621 1.472 1.152v1.12c0 .453-.19.768-.484.992c-.316.239-.774.382-1.269.384s-.95-.139-1.264-.375c-.292-.22-.483-.537-.483-1.001a.75.75 0 0 0-1.5 0c0 .961.434 1.71 1.08 2.198c.624.471 1.417.68 2.173.678c.755-.003 1.547-.218 2.169-.689a2.67 2.67 0 0 0 1.078-2.187v-1.12c0-1.57-1.444-2.652-2.972-2.652H10.25V8.87c.206.024.441.047.697.066c.906.064 2.123.07 3.235-.208a.75.75 0 0 0-.364-1.456c-.749.188-1.601.22-2.356.19a13 13 0 0 1-1.431-.134a11 11 0 0 1-.364-.06a.77.77 0 0 0-.642.152"></svg:path>`,
})
export class MynauiFiveCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveDiamondIcon],svg[mynaui-five-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"></svg:path><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path></svg:g>`,
})
export class MynauiFiveDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveDiamondSolidIcon],svg[mynaui-five-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.765 2.176a3.16 3.16 0 0 1 4.47 0l7.588 7.589a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47zm-.74 5.244A.75.75 0 0 0 8.75 8v2.852a.75.75 0 0 0 .75.75h2.778c.927 0 1.472.621 1.472 1.152v1.12c0 .453-.19.768-.484.992c-.316.239-.774.382-1.269.384s-.95-.139-1.264-.375c-.292-.22-.483-.537-.483-1.001a.75.75 0 0 0-1.5 0c0 .961.434 1.71 1.08 2.198c.624.471 1.417.68 2.173.678c.755-.003 1.547-.218 2.169-.689a2.67 2.67 0 0 0 1.078-2.187v-1.12c0-1.57-1.444-2.652-2.972-2.652H10.25V8.87c.206.024.441.047.697.066c.906.064 2.123.07 3.235-.208a.75.75 0 0 0-.364-1.456c-.749.188-1.601.22-2.356.19a13 13 0 0 1-1.431-.134a11 11 0 0 1-.364-.06a.77.77 0 0 0-.642.152"></svg:path>`,
})
export class MynauiFiveDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveHexagonIcon],svg[mynaui-five-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"></svg:path><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path></svg:g>`,
})
export class MynauiFiveHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveHexagonSolidIcon],svg[mynaui-five-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75c.463 0 .919.123 1.32.355l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002l6.61-3.8A2.63 2.63 0 0 1 12 1.75M9.025 7.42A.75.75 0 0 0 8.75 8v2.852a.75.75 0 0 0 .75.75h2.778c.927 0 1.472.621 1.472 1.152v1.12c0 .453-.19.768-.484.992c-.316.239-.774.382-1.269.384s-.95-.139-1.264-.375c-.292-.22-.483-.537-.483-1.001a.75.75 0 0 0-1.5 0c0 .961.434 1.71 1.08 2.198c.624.471 1.417.68 2.173.678c.755-.003 1.547-.218 2.169-.689a2.67 2.67 0 0 0 1.078-2.187v-1.12c0-1.57-1.444-2.652-2.972-2.652H10.25V8.87c.206.024.441.047.697.066c.906.064 2.123.07 3.235-.208a.75.75 0 0 0-.364-1.456c-.749.188-1.601.22-2.356.19a13 13 0 0 1-1.431-.134a11 11 0 0 1-.364-.06a.77.77 0 0 0-.642.152"></svg:path>`,
})
export class MynauiFiveHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveOctagonIcon],svg[mynaui-five-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"></svg:path><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path></svg:g>`,
})
export class MynauiFiveOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveOctagonSolidIcon],svg[mynaui-five-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm1.75 4.482A.75.75 0 0 0 8.75 8v2.852a.75.75 0 0 0 .75.75h2.778c.927 0 1.472.621 1.472 1.152v1.12c0 .453-.19.768-.484.992c-.316.239-.774.382-1.269.384s-.95-.139-1.264-.375c-.292-.22-.483-.537-.483-1.001a.75.75 0 0 0-1.5 0c0 .961.434 1.71 1.08 2.198c.624.471 1.417.68 2.173.678c.755-.003 1.547-.218 2.169-.689a2.67 2.67 0 0 0 1.078-2.187v-1.12c0-1.57-1.444-2.652-2.972-2.652H10.25V8.87c.206.024.441.047.697.066c.906.064 2.123.07 3.235-.208a.75.75 0 0 0-.364-1.456c-.749.188-1.601.22-2.356.19a13 13 0 0 1-1.431-.134a11 11 0 0 1-.364-.06a.77.77 0 0 0-.642.152"></svg:path>`,
})
export class MynauiFiveOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveSolidIcon],svg[mynaui-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a.75.75 0 0 1 .75-.75h5.625a.75.75 0 0 1 0 1.5H9.5v2.066h2.723c1.834 0 3.527 1.295 3.527 3.127v1.399c0 1.132-.514 2.01-1.274 2.585c-.739.56-1.687.82-2.598.823c-.912.003-1.862-.25-2.603-.81C8.512 16.364 8 15.482 8 14.342a.75.75 0 0 1 1.5 0c0 .643.27 1.092.678 1.401c.43.325 1.043.51 1.694.507c.651-.002 1.266-.19 1.699-.518c.412-.313.679-.76.679-1.39v-1.4c0-.793-.794-1.626-2.027-1.626H8.75a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveSquareIcon],svg[mynaui-five-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiFiveSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveSquareSolidIcon],svg[mynaui-five-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.712 2.307c.697-.057 1.563-.057 2.655-.057h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461M9.025 7.42A.75.75 0 0 0 8.75 8v2.852a.75.75 0 0 0 .75.75h2.778c.927 0 1.472.621 1.472 1.152v1.12c0 .453-.19.768-.484.992c-.316.239-.774.382-1.269.384s-.95-.139-1.264-.375c-.292-.22-.483-.537-.483-1.001a.75.75 0 0 0-1.5 0c0 .961.434 1.71 1.08 2.198c.624.471 1.417.68 2.173.678c.755-.003 1.547-.218 2.169-.689a2.67 2.67 0 0 0 1.078-2.187v-1.12c0-1.57-1.444-2.652-2.972-2.652H10.25V8.87c.206.024.441.047.697.066c.906.064 2.123.07 3.235-.208a.75.75 0 0 0-.364-1.456c-.749.188-1.601.22-2.356.19a13 13 0 0 1-1.431-.134a11 11 0 0 1-.364-.06a.77.77 0 0 0-.642.152"></svg:path>`,
})
export class MynauiFiveSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveWavesIcon],svg[mynaui-five-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 8c-2 .5-4.5 0-4.5 0v2.852h2.778c1.227 0 2.222.852 2.222 1.902v1.12c0 2.818-5 2.852-5 0"></svg:path><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path></svg:g>`,
})
export class MynauiFiveWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFiveWavesSolidIcon],svg[mynaui-five-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.304 3.003c.506-.431.867-.74 1.261-.928a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655zm-.28 4.417A.75.75 0 0 0 8.75 8v2.852a.75.75 0 0 0 .75.75h2.778c.927 0 1.472.621 1.472 1.152v1.12c0 .453-.19.768-.484.992c-.316.239-.774.382-1.269.384s-.95-.139-1.264-.375c-.292-.22-.483-.537-.483-1.001a.75.75 0 0 0-1.5 0c0 .961.434 1.71 1.08 2.198c.624.471 1.417.68 2.173.678c.755-.003 1.547-.218 2.169-.689a2.67 2.67 0 0 0 1.078-2.187v-1.12c0-1.57-1.444-2.652-2.972-2.652H10.25V8.87c.206.024.441.047.697.066c.906.064 2.123.07 3.235-.208a.75.75 0 0 0-.364-1.456c-.749.188-1.601.22-2.356.19a13 13 0 0 1-1.431-.134a11 11 0 0 1-.364-.06a.77.77 0 0 0-.642.152"></svg:path>`,
})
export class MynauiFiveWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFlagIcon],svg[mynaui-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z"></svg:path>`,
})
export class MynauiFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFlagOneIcon],svg[mynaui-flag-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.75 14l13.78-4.04c.96-.282.96-1.638 0-1.92L4.75 4m0 10V4m0 10v7m0-17V3"></svg:path>`,
})
export class MynauiFlagOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFlagOneSolidIcon],svg[mynaui-flag-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A.75.75 0 0 0 4 3v18a.75.75 0 0 0 1.5 0v-6.438l13.241-3.883c1.679-.492 1.679-2.866 0-3.358L5.5 3.438z"></svg:path>`,
})
export class MynauiFlagOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFlagSolidIcon],svg[mynaui-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.538 3.723c-1.3 1.016-2.469 1.246-3.594 1.124c-1.18-.127-2.342-.64-3.638-1.218l-.053-.024c-1.235-.552-2.6-1.162-4.036-1.317c-1.511-.163-3.07.176-4.679 1.434a.75.75 0 0 0-.288.591V21a.75.75 0 0 0 1.5 0v-4.936c1.186-.835 2.264-1.023 3.306-.91c1.18.126 2.342.639 3.638 1.218l.053.023c1.235.553 2.6 1.162 4.036 1.317c1.511.163 3.07-.176 4.679-1.434a.75.75 0 0 0 .288-.591V4.313a.75.75 0 0 0-1.212-.59"></svg:path>`,
})
export class MynauiFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFlaskIcon],svg[mynaui-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.894 3.5v8l-3.66 3.965c-.932 1.265-2.795 3.276-.948 4.622c.568.413 1.615.413 3.71.413h6.009c2.094 0 3.141 0 3.709-.413c1.847-1.346-.016-3.357-.949-4.622l-3.66-3.965v-8m-4.21 0h4.21m-4.21 0H8.84m5.265 0h1.053"></svg:path>`,
})
export class MynauiFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFlaskSolidIcon],svg[mynaui-flask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.841 2.75a.75.75 0 1 0 0 1.5h.303v6.957l-3.46 3.75l-.053.063q-.118.158-.268.354c-.43.559-1.013 1.319-1.335 2.079c-.207.488-.347 1.06-.242 1.653c.11.618.467 1.156 1.059 1.587c.456.333 1.034.448 1.658.502c.627.055 1.44.055 2.455.055h6.084c1.016 0 1.828 0 2.455-.055c.624-.054 1.202-.17 1.658-.502c.592-.431.95-.97 1.06-1.587c.105-.594-.036-1.165-.243-1.653c-.322-.76-.905-1.52-1.335-2.08q-.15-.194-.268-.353l-.053-.064l-3.46-3.75V4.25h.303a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiFlaskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderIcon],svg[mynaui-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MynauiFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderCheckIcon],svg[mynaui-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="m10.258 13.242l1.034 1.181c.095.109.266.1.35-.016l2.1-2.907"></svg:path></svg:g>`,
})
export class MynauiFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderCheckSolidIcon],svg[mynaui-folder-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6m11.931 4.892a.75.75 0 0 1 .169 1.047l-2.1 2.907a.974.974 0 0 1-1.522.072l-1.034-1.182a.75.75 0 0 1 1.129-.988l.598.684l1.713-2.371a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiFolderCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderHeartIcon],svg[mynaui-folder-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M8.62 12.024c0 1.972 3.38 4.226 3.38 4.226s3.38-2.254 3.38-4.226c0-1.88-2.55-2.454-3.38-.798c-.814-1.625-3.38-1.053-3.38.798"></svg:path></svg:g>`,
})
export class MynauiFolderHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderHeartSolidIcon],svg[mynaui-folder-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686zm6.58 13.621l-.01-.006l-.032-.022l-.117-.082a15 15 0 0 1-1.63-1.343c-.446-.427-.913-.939-1.273-1.494c-.354-.546-.649-1.201-.649-1.9c0-1.335.945-2.198 1.967-2.433c.713-.165 1.53-.038 2.158.458c1.506-1.229 4.137-.316 4.137 1.975c0 .699-.295 1.354-.65 1.9c-.36.556-.826 1.067-1.272 1.494a14.6 14.6 0 0 1-1.747 1.425l-.032.022l-.01.006l-.002.002h-.001a.75.75 0 0 1-.833 0h-.002z"></svg:path><svg:path d="M14.63 12.024c0-1.068-1.475-1.43-1.96-.462a.75.75 0 0 1-1.34 0c-.225-.448-.687-.618-1.157-.51c-.465.107-.804.456-.804.972c0 .287.128.653.408 1.084c.274.422.652.844 1.052 1.227c.396.38.796.705 1.098.936l.073.055l.073-.055c.302-.23.702-.556 1.098-.936c.4-.383.778-.805 1.052-1.227c.28-.431.408-.797.408-1.084"></svg:path></svg:g>`,
})
export class MynauiFolderHeartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderMinusIcon],svg[mynaui-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 7h4"></svg:path>`,
})
export class MynauiFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderMinusSolidIcon],svg[mynaui-folder-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6M10 12.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiFolderMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderOneIcon],svg[mynaui-folder-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.661 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m8.661 0a2 2 0 0 1-1.322-.5l-2.272-2A2 2 0 0 0 6.745 4H5a2 2 0 0 0-2 2v1m8.661 0H3"></svg:path>`,
})
export class MynauiFolderOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderOneSolidIcon],svg[mynaui-folder-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.75h1.745c.304 0 .598.11.826.312L8.92 6.25H3.75V6c0-.69.56-1.25 1.25-1.25m6.661 1.5a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25z"></svg:path>`,
})
export class MynauiFolderOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderPlusIcon],svg[mynaui-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 7.25h4m-2-2v4"></svg:path>`,
})
export class MynauiFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderPlusSolidIcon],svg[mynaui-folder-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6M12 10.5a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V14H10a.75.75 0 0 1 0-1.5h1.25v-1.25a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiFolderPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderSlashIcon],svg[mynaui-folder-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 21l1.177-1.177M21 3l-4 4m0 0h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5c-.293 0-.572-.063-.823-.177M17 7L4.177 19.823M3 16.5V6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H13"></svg:path>`,
})
export class MynauiFolderSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderSlashSolidIcon],svg[mynaui-folder-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12c0 .744.295 1.419.775 1.914l-.555.556a.75.75 0 1 0 1.06 1.06l.85-.85q.3.07.62.07h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-.19l2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.78 3.78h-5.03a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686z"></svg:path>`,
})
export class MynauiFolderSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderSolidIcon],svg[mynaui-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686z"></svg:path>`,
})
export class MynauiFolderSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderTwoIcon],svg[mynaui-folder-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7h-7.34a2 2 0 0 1-1.322-.5l-2.272-2M19 7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5M19 7a2.5 2.5 0 0 0-2.5-2.5H8.066"></svg:path>`,
})
export class MynauiFolderTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderTwoSolidIcon],svg[mynaui-folder-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9c0-1.283-.88-2.361-2.068-2.665a3.25 3.25 0 0 0-3.183-2.586H8.325a2.75 2.75 0 0 0-1.58-.499zm11.5 2c.698 0 1.3.408 1.582 1h-6.42a1.25 1.25 0 0 1-.827-.312l-.782-.689z"></svg:path>`,
})
export class MynauiFolderTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderXIcon],svg[mynaui-folder-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7.5 6l2.828 2.828m0-2.828L10.5 14.828"></svg:path>`,
})
export class MynauiFolderXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderXSolidIcon],svg[mynaui-folder-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6m7.72 5.47a.75.75 0 0 1 1.06 0l.884.884l.884-.884a.75.75 0 0 1 1.06 1.06l-.883.884l.884.884a.75.75 0 0 1-1.06 1.06l-.885-.883l-.884.884a.75.75 0 1 1-1.06-1.06l.884-.885l-.884-.884a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiFolderXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardIcon],svg[mynaui-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.985 9.419C11.328 10.515 12 11.063 12 12s-.672 1.485-2.015 2.582c-.371.302-.74.587-1.077.824a18 18 0 0 1-.98.635c-1.341.816-2.011 1.223-2.612.772c-.602-.451-.656-1.396-.766-3.285A27 27 0 0 1 4.5 12c0-.47.02-.993.05-1.528c.11-1.89.164-2.834.766-3.285c.6-.451 1.27-.044 2.611.771c.348.212.684.427.98.636c.339.237.707.522 1.078.825m7.5 0C18.828 10.515 19.5 11.063 19.5 12s-.672 1.485-2.015 2.582c-.371.302-.74.587-1.077.824c-.297.209-.633.424-.98.635c-1.341.816-2.011 1.223-2.613.772c-.6-.451-.655-1.396-.764-3.285A27 27 0 0 1 12 12c0-.47.02-.993.05-1.528c.11-1.89.164-2.834.765-3.285c.602-.451 1.272-.044 2.612.771c.348.212.684.427.98.636c.339.237.707.522 1.078.825"></svg:path>`,
})
export class MynauiForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardCircleIcon],svg[mynaui-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.635-.022 1.306.385c.174.106.342.214.49.318c.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiForwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardCircleSolidIcon],svg[mynaui-forward-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M9.603 9.338c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 6.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465zm5.702-.03l.048.03c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.002-.046A14 14 0 0 1 12.5 12c0-.254.01-.531.027-.807l.002-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiForwardCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardDiamondIcon],svg[mynaui-forward-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.635-.022 1.306.385c.174.106.342.214.49.318c.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiForwardDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardDiamondSolidIcon],svg[mynaui-forward-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25M9.603 9.338c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 6.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465zm5.702-.03l.048.03c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.002-.046A14 14 0 0 1 12.5 12c0-.254.01-.531.027-.807l.002-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiForwardDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardHexagonIcon],svg[mynaui-forward-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.635-.022 1.306.385c.174.106.342.214.49.318c.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiForwardHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardHexagonSolidIcon],svg[mynaui-forward-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75M9.603 9.338c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 6.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465zm5.702-.03l.048.03c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.002-.046A14 14 0 0 1 12.5 12c0-.254.01-.531.027-.807l.002-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiForwardHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardOctagonIcon],svg[mynaui-forward-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.635-.022 1.306.385c.174.106.342.214.49.318c.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiForwardOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardOctagonSolidIcon],svg[mynaui-forward-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zm.666 7.088c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 6.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465zm5.702-.03l.048.03c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.002-.046A14 14 0 0 1 12.5 12c0-.254.01-.531.027-.807l.002-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiForwardOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardSolidIcon],svg[mynaui-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m8.317 7.318l-.063-.039c-.616-.374-1.174-.714-1.656-.887a2.1 2.1 0 0 0-.865-.137c-.322.024-.612.14-.868.332c-.519.39-.736.959-.853 1.56c-.112.58-.155 1.33-.207 2.228l-.003.054A28 28 0 0 0 3.75 12c0 .489.02 1.028.052 1.571l.003.054c.052.899.095 1.649.207 2.227c.117.602.334 1.171.853 1.56c.256.193.546.31.868.333c.309.023.6-.042.865-.137c.482-.173 1.04-.513 1.656-.887l.063-.039c.357-.217.707-.441 1.022-.662c.357-.251.74-.548 1.12-.857l.048-.04c.63-.514 1.178-.96 1.558-1.403c.422-.491.685-1.03.685-1.72s-.263-1.229-.685-1.72c-.38-.442-.928-.889-1.558-1.403l-.048-.04c-.38-.309-.763-.606-1.12-.857c-.315-.22-.665-.445-1.022-.662"></svg:path><svg:path d="m15.817 7.318l-.063-.039c-.616-.374-1.173-.714-1.656-.887a2.1 2.1 0 0 0-.865-.137c-.322.024-.612.14-.868.332c-.519.39-.736.959-.853 1.56c-.112.58-.155 1.33-.207 2.228l-.003.054A28 28 0 0 0 11.25 12c0 .489.02 1.028.052 1.571l.003.054c.052.899.095 1.649.207 2.227c.117.602.334 1.171.853 1.56c.256.193.546.31.868.333c.309.023.6-.042.865-.137c.482-.173 1.04-.513 1.656-.887l.063-.039c.357-.217.707-.441 1.022-.662c.358-.251.74-.548 1.12-.857l.048-.04c.63-.514 1.178-.96 1.558-1.403c.422-.491.685-1.03.685-1.72s-.263-1.229-.685-1.72c-.38-.442-.928-.889-1.558-1.403l-.048-.04c-.38-.309-.762-.606-1.12-.857c-.315-.22-.665-.445-1.022-.662"></svg:path></svg:g>`,
})
export class MynauiForwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardSquareIcon],svg[mynaui-forward-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.635-.022 1.306.385c.174.106.342.214.49.318c.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiForwardSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardSquareSolidIcon],svg[mynaui-forward-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm.236 7.088c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 6.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465zm5.702-.03l.048.03c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.002-.046A14 14 0 0 1 12.5 12c0-.254.01-.531.027-.807l.002-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiForwardSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardWavesIcon],svg[mynaui-forward-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M10.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 7.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.635-.022 1.306.385c.174.106.342.214.49.318c.169.118.353.261.538.412m5.75.001c.672.546 1.008.82 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 13.25 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiForwardWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiForwardWavesSolidIcon],svg[mynaui-forward-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928M9.603 9.338c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 6.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465zm5.702-.03l.048.03c.183.112.366.229.532.345c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.736l-.04.032c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.002-.046A14 14 0 0 1 12.5 12c0-.254.01-.531.027-.807l.002-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiForwardWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourIcon],svg[mynaui-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.917 7c-1.042 3.75-4.167 6.875-4.167 6.875H15M13.438 17v-5"></svg:path>`,
})
export class MynauiFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourCircleIcon],svg[mynaui-four-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path></svg:g>`,
})
export class MynauiFourCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourCircleSolidIcon],svg[mynaui-four-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.056-3.8a.75.75 0 1 0-1.445-.4c-.383 1.377-1.16 2.668-1.863 3.633a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourDiamondIcon],svg[mynaui-four-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path></svg:g>`,
})
export class MynauiFourDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourDiamondSolidIcon],svg[mynaui-four-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m2.516 6.71a.75.75 0 1 0-1.445-.4c-.383 1.377-1.16 2.668-1.863 3.633a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourHexagonIcon],svg[mynaui-four-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path></svg:g>`,
})
export class MynauiFourHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourHexagonSolidIcon],svg[mynaui-four-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm2.626 6.096a.75.75 0 1 0-1.445-.402c-.383 1.378-1.16 2.67-1.863 3.634a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourOctagonIcon],svg[mynaui-four-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path></svg:g>`,
})
export class MynauiFourOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourOctagonSolidIcon],svg[mynaui-four-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M13.306 8.2a.75.75 0 1 0-1.445-.402c-.383 1.378-1.16 2.67-1.863 3.634a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourSolidIcon],svg[mynaui-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.117 6.277a.75.75 0 0 1 .522.924c-.555 1.997-1.653 3.8-2.59 5.085c-.225.309-.443.59-.644.839h2.283V12a.75.75 0 0 1 1.5 0v1.125H15a.75.75 0 0 1 0 1.5h-.812V17a.75.75 0 0 1-1.5 0v-2.375H8.75a.75.75 0 0 1-.53-1.28l.005-.006l.023-.023l.093-.097a20 20 0 0 0 1.496-1.817c.886-1.215 1.87-2.85 2.357-4.603a.75.75 0 0 1 .923-.522"></svg:path>`,
})
export class MynauiFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourSquareIcon],svg[mynaui-four-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiFourSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourSquareSolidIcon],svg[mynaui-four-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.939 5.95a.75.75 0 1 0-1.445-.4c-.383 1.377-1.16 2.668-1.863 3.633a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourWavesIcon],svg[mynaui-four-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M12.583 8c-.833 3-3.333 5.5-3.333 5.5h5M13 16v-4"></svg:path></svg:g>`,
})
export class MynauiFourWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFourWavesSolidIcon],svg[mynaui-four-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m2.741 6.126a.75.75 0 1 0-1.445-.402c-.383 1.378-1.16 2.67-1.863 3.634a16 16 0 0 1-1.185 1.44l-.072.075l-.018.018l-.004.004a.75.75 0 0 0 .531 1.28h3V16a.75.75 0 0 0 1.5 0v-1.75h.5a.75.75 0 0 0 0-1.5h-.5V12a.75.75 0 0 0-1.5 0v.75h-1.366q.159-.203.326-.433c.755-1.035 1.645-2.494 2.096-4.116"></svg:path>`,
})
export class MynauiFourWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFrameIcon],svg[mynaui-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6.6H3m18 10.8H3M6.6 3v18M17.4 3v18"></svg:path>`,
})
export class MynauiFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFrameSolidIcon],svg[mynaui-frame-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 0 0 0 1.5h2.85v9.3H3a.75.75 0 0 0 0 1.5h2.85V21a.75.75 0 0 0 1.5 0v-2.85h9.3V21a.75.75 0 0 0 1.5 0v-2.85H21a.75.75 0 0 0 0-1.5h-2.85v-9.3H21a.75.75 0 0 0 0-1.5h-2.85V3a.75.75 0 0 0-1.5 0v2.85h-9.3z"></svg:path>`,
})
export class MynauiFrameSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnyCircleIcon],svg[mynaui-funny-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.699 10.646l-.104-.49m4.995-.55l-.104-.49M8.5 15.57c1.258.316 2.686.316 4.123-.069c1.436-.385 2.672-1.099 3.604-2.001"></svg:path><svg:path d="m12.587 15.637l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiFunnyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnyCircleSolidIcon],svg[mynaui-funny-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m1.33 6.133a.75.75 0 0 1 .89.578l.103.489a.75.75 0 1 1-1.467.312l-.104-.49a.75.75 0 0 1 .578-.889m-4.891 1.04a.75.75 0 0 1 .89.578l.103.489a.75.75 0 1 1-1.467.311l-.104-.489a.75.75 0 0 1 .578-.89m8.327 3.555a.75.75 0 0 1-.017 1.06a8 8 0 0 1-.536.476l.218.445a2.25 2.25 0 0 1-4.039 1.983l-.273-.557a8.9 8.9 0 0 1-3.801-.087a.75.75 0 0 1 .364-1.455c1.13.283 2.429.287 3.746-.066s2.44-1.005 3.278-1.816a.75.75 0 0 1 1.06.017"></svg:path><svg:path d="M13.592 15.982q.721-.26 1.366-.62l.127.258a.75.75 0 0 1-1.346.66z"></svg:path></svg:g>`,
})
export class MynauiFunnyCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnyGhostIcon],svg[mynaui-funny-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.699 10.646l-.104-.49m4.995-.55l-.104-.49M8.5 15.57c1.258.316 2.686.316 4.123-.069c1.436-.385 2.672-1.099 3.604-2.001"></svg:path><svg:path d="m12.587 15.637l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path d="M3 18.562v-6.518C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiFunnyGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnyGhostSolidIcon],svg[mynaui-funny-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m14.516.934a.75.75 0 0 1-.017 1.06a8 8 0 0 1-.536.476l.218.445a2.25 2.25 0 0 1-4.039 1.983l-.273-.557a8.9 8.9 0 0 1-3.801-.087a.75.75 0 0 1 .364-1.455c1.13.283 2.429.287 3.746-.066s2.44-1.005 3.278-1.816a.75.75 0 0 1 1.06.017m-3.027 3.303l-.147-.299q.721-.26 1.366-.62l.127.258a.75.75 0 0 1-1.346.66M9.329 10l.103.489a.75.75 0 1 1-1.467.311l-.104-.489A.75.75 0 1 1 9.328 10m4-1.618a.75.75 0 0 1 .89.578l.104.489a.75.75 0 1 1-1.467.312l-.104-.49a.75.75 0 0 1 .578-.889"></svg:path>`,
})
export class MynauiFunnyGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnySquareIcon],svg[mynaui-funny-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.699 10.646l-.104-.49m4.995-.55l-.104-.49M8.5 15.57c1.258.316 2.686.316 4.123-.069c1.436-.385 2.672-1.099 3.604-2.001"></svg:path><svg:path d="m12.587 15.637l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path></svg:g>`,
})
export class MynauiFunnySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnySquareSolidIcon],svg[mynaui-funny-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm7.4 10.728a.75.75 0 0 1-.018 1.06a8 8 0 0 1-.536.476l.218.445a2.25 2.25 0 0 1-4.039 1.983l-.273-.557a8.9 8.9 0 0 1-3.801-.087a.75.75 0 0 1 .364-1.455c1.13.283 2.429.287 3.746-.066s2.44-1.005 3.278-1.816a.75.75 0 0 1 1.06.017m-3.028 3.303l-.147-.299q.721-.26 1.366-.62l.127.258a.75.75 0 0 1-1.346.66M9.329 10l.103.489a.75.75 0 1 1-1.467.311l-.104-.489A.75.75 0 1 1 9.328 10m4-1.618a.75.75 0 0 1 .89.578l.104.489a.75.75 0 1 1-1.467.312l-.104-.49a.75.75 0 0 1 .578-.889"></svg:path>`,
})
export class MynauiFunnySquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGhostDazeIcon],svg[mynaui-ghost-daze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7.25l-1.333-1l-1.334 1l-1.333-1l-1.333 1l-1.334-1l-1.333 1"></svg:path><svg:path d="M3 18.561v-6.517C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiGhostDazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGhostFunnyIcon],svg[mynaui-ghost-funny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.699 10.646l-.104-.49m4.995-.55l-.104-.49M8.5 15.57c1.258.316 2.686.316 4.123-.069c1.436-.385 2.672-1.099 3.604-2.001"></svg:path><svg:path d="m12.587 15.637l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path d="M3 18.561v-6.517C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiGhostFunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGhostIndifferentIcon],svg[mynaui-ghost-indifferent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 15.5h6m-5.5-5V10m5 .5V10M3 18.561v-6.517C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path>`,
})
export class MynauiGhostIndifferentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGhostSadIcon],svg[mynaui-ghost-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1m-5.5-5.5V10m5 .5V10"></svg:path><svg:path d="M3 18.561v-6.517C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiGhostSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGhostSmileIcon],svg[mynaui-ghost-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1m-5.5-4.5V10m5 .5V10"></svg:path><svg:path d="M3 18.561v-6.517C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiGhostSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGiftIcon],svg[mynaui-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21v-9m0-5H7.95c-2.77 0-2.94-4 0-4C11.1 3 12 7 12 7m0 0h4.05c2.896 0 2.896-4 0-4C12.9 3 12 7 12 7"></svg:path><svg:path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7m17 0V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3z"></svg:path></svg:g>`,
})
export class MynauiGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGiftSolidIcon],svg[mynaui-gift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.559 4.984c.013.637.457 1.266 1.391 1.266h3.007a6 6 0 0 0-.439-.855C9.964 4.498 9.152 3.75 7.95 3.75c-.555 0-.89.183-1.085.39a1.18 1.18 0 0 0-.306.844m6.484 1.266h3.007c.541 0 .882-.181 1.09-.396c.215-.223.332-.531.332-.854s-.117-.63-.333-.854c-.207-.215-.548-.396-1.089-.396c-1.202 0-2.014.748-2.568 1.645c-.182.293-.327.59-.44.855m7.707 6.5V19A2.75 2.75 0 0 1 18 21.75H6A2.75 2.75 0 0 1 3.25 19v-6.25H3a.75.75 0 0 1-.75-.75V9A2.75 2.75 0 0 1 5 6.25h.37a2.85 2.85 0 0 1-.311-1.234a2.68 2.68 0 0 1 .716-1.906c.513-.543 1.26-.86 2.175-.86c1.948 0 3.161 1.252 3.844 2.355q.11.18.206.356q.096-.176.206-.356c.683-1.103 1.896-2.355 3.844-2.355c.907 0 1.651.319 2.168.854c.509.527.754 1.219.754 1.896c0 .426-.097.857-.295 1.25H19A2.75 2.75 0 0 1 21.75 9v3a.75.75 0 0 1-.75.75zm-1.5 0h-6.5v7.5H18c.69 0 1.25-.56 1.25-1.25zm-8 7.5v-7.5h-6.5V19c0 .69.56 1.25 1.25 1.25z"></svg:path>`,
})
export class MynauiGiftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitBranchIcon],svg[mynaui-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 15a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path><svg:path d="M18 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 0a9 9 0 0 1-9 9m-3-3V3"></svg:path></svg:g>`,
})
export class MynauiGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitBranchSolidIcon],svg[mynaui-git-branch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3a.75.75 0 0 0-1.5 0v11.325a3.751 3.751 0 1 0 4.43 4.402a9.75 9.75 0 0 0 9.047-9.047a3.751 3.751 0 1 0-1.504-.01a8.25 8.25 0 0 1-7.554 7.553a3.76 3.76 0 0 0-2.919-2.898z"></svg:path>`,
})
export class MynauiGitBranchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitCircleIcon],svg[mynaui-git-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"></svg:path></svg:g>`,
})
export class MynauiGitCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitCircleSolidIcon],svg[mynaui-git-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m7.104-.75a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitCommitIcon],svg[mynaui-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-9-3h6m6 0h6"></svg:path>`,
})
export class MynauiGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitCommitSolidIcon],svg[mynaui-git-commit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.25a3.75 3.75 0 0 0-3.675 3H3a.75.75 0 0 0 0 1.5h5.325a3.751 3.751 0 0 0 7.35 0H21a.75.75 0 0 0 0-1.5h-5.325a3.75 3.75 0 0 0-3.675-3"></svg:path>`,
})
export class MynauiGitCommitSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitDiamondIcon],svg[mynaui-git-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"></svg:path></svg:g>`,
})
export class MynauiGitDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitDiamondSolidIcon],svg[mynaui-git-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m-1.436 9.76a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitDiffIcon],svg[mynaui-git-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-6V7.5a2 2 0 0 0-2-2h-2.5"></svg:path><svg:path d="M14.5 8L12 5.5L14.5 3M6 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 6v7.5a2 2 0 0 0 2 2h2.5"></svg:path><svg:path d="m9.5 16l2.5 2.5L9.5 21"></svg:path></svg:g>`,
})
export class MynauiGitDiffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitDiffSolidIcon],svg[mynaui-git-diff-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6a3.75 3.75 0 1 1 4.5 3.675V16.5c0 .69.56 1.25 1.25 1.25h2.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H8a2.75 2.75 0 0 1-2.75-2.75V9.675A3.75 3.75 0 0 1 2.25 6m12.78-3.53a.75.75 0 0 1 0 1.06l-1.22 1.22H16a2.75 2.75 0 0 1 2.75 2.75v6.825A3.751 3.751 0 0 1 18 21.75a3.75 3.75 0 0 1-.75-7.425V7.5c0-.69-.56-1.25-1.25-1.25h-2.19l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiGitDiffSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitHexagonIcon],svg[mynaui-git-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"></svg:path></svg:g>`,
})
export class MynauiGitHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitHexagonSolidIcon],svg[mynaui-git-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M9.354 11.25a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitMergeIcon],svg[mynaui-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m9 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 0a9 9 0 0 1-9-9m0 0v12"></svg:path>`,
})
export class MynauiGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitMergeSolidIcon],svg[mynaui-git-merge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6a3.75 3.75 0 1 1 4.527 3.67a8.25 8.25 0 0 0 7.554 7.553A3.751 3.751 0 0 1 21.75 18a3.75 3.75 0 0 1-7.43.727a9.75 9.75 0 0 1-7.57-4.529V21a.75.75 0 0 1-1.5 0V9.675A3.75 3.75 0 0 1 2.25 6"></svg:path>`,
})
export class MynauiGitMergeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitOctagonIcon],svg[mynaui-git-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"></svg:path></svg:g>`,
})
export class MynauiGitOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitOctagonSolidIcon],svg[mynaui-git-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158m1.317 8.842a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitPullRequestIcon],svg[mynaui-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 9v12m12-6V7.5a2 2 0 0 0-2-2h-2.5"></svg:path><svg:path d="M14.5 8L12 5.5L14.5 3"></svg:path></svg:g>`,
})
export class MynauiGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitPullRequestSolidIcon],svg[mynaui-git-pull-request-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6a3.75 3.75 0 1 1 4.5 3.675V21a.75.75 0 0 1-1.5 0V9.675A3.75 3.75 0 0 1 2.25 6m12.78-3.53a.75.75 0 0 1 0 1.06l-1.22 1.22H16a2.75 2.75 0 0 1 2.75 2.75v6.825A3.751 3.751 0 0 1 18 21.75a3.75 3.75 0 0 1-.75-7.425V7.5c0-.69-.56-1.25-1.25-1.25h-2.19l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiGitPullRequestSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitSquareIcon],svg[mynaui-git-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"></svg:path></svg:g>`,
})
export class MynauiGitSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitSquareSolidIcon],svg[mynaui-git-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.013 9a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitWavesIcon],svg[mynaui-git-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"></svg:path><svg:path d="M14 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h3m-7 0H7"></svg:path></svg:g>`,
})
export class MynauiGitWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGitWavesSolidIcon],svg[mynaui-git-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M9.354 11.25a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGlassesIcon],svg[mynaui-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.5 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M13.5 15.16c-1.042-.371-1.937-.379-3 0m9-.16l-.572-6.296c-.166-1.825-.73-2.14-2.428-2.704m-12 9l.572-6.296C5.238 6.88 5.802 6.564 7.5 6"></svg:path></svg:g>`,
})
export class MynauiGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGlassesSolidIcon],svg[mynaui-glasses-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.212 5.764a.75.75 0 0 1-.476.948c-.88.292-1.265.466-1.492.695c-.186.189-.347.505-.425 1.365L5.544 11.8a3.75 3.75 0 0 1 5.622 2.405a4.6 4.6 0 0 1 1.668 0a3.75 3.75 0 0 1 5.622-2.405l-.275-3.028c-.078-.86-.239-1.177-.425-1.365c-.227-.229-.61-.402-1.492-.695a.75.75 0 1 1 .472-1.424c.817.272 1.564.537 2.085 1.063c.562.567.766 1.32.854 2.285l.52 5.716q.055.316.055.648a3.75 3.75 0 0 1-7.428.736a3.2 3.2 0 0 0-1.644 0a3.751 3.751 0 0 1-7.372-1.384l.52-5.716c.087-.965.292-1.718.853-2.285c.521-.526 1.268-.792 2.085-1.063a.75.75 0 0 1 .948.476"></svg:path>`,
})
export class MynauiGlassesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGlobeIcon],svg[mynaui-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"></svg:path>`,
})
export class MynauiGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGlobeSolidIcon],svg[mynaui-globe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.06 9.75A8.3 8.3 0 0 0 3.75 12c0 .78.108 1.535.31 2.25h3.371A21 21 0 0 1 7.309 12c0-.716.04-1.479.122-2.25zm-1.3-.867a.8.8 0 0 1 .09-.257a9.754 9.754 0 0 1 18.302.001a.8.8 0 0 1 .09.254c.33.98.509 2.028.509 3.119c0 1.09-.18 2.14-.51 3.119a.8.8 0 0 1-.089.254a9.754 9.754 0 0 1-18.302 0a.8.8 0 0 1-.09-.256A9.7 9.7 0 0 1 2.25 12c0-1.09.179-2.139.509-3.117M12 3.75c-.428 0-.832.192-1.228.624c-.407.443-.77 1.107-1.073 1.942c-.215.594-.39 1.25-.525 1.934h5.652a13.5 13.5 0 0 0-.525-1.934c-.302-.835-.666-1.499-1.073-1.942c-.396-.432-.8-.624-1.228-.624m4.57 10.5h3.37c.202-.715.31-1.47.31-2.25s-.108-1.535-.31-2.25h-3.37c.082.771.121 1.534.121 2.25s-.04 1.479-.122 2.25m-1.744 1.5H9.174c.136.683.31 1.34.525 1.934c.302.835.666 1.499 1.073 1.942c.396.432.8.624 1.228.624s.832-.192 1.228-.624c.407-.443.771-1.107 1.073-1.942c.215-.594.39-1.25.525-1.934m-5.86 3.925a9 9 0 0 1-.677-1.481a15.4 15.4 0 0 1-.642-2.444H4.65a8.28 8.28 0 0 0 4.317 3.925M19.35 8.25a8.28 8.28 0 0 0-4.317-3.925c.265.454.489.957.678 1.481c.274.757.487 1.59.643 2.444z"></svg:path>`,
})
export class MynauiGlobeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiGridIcon],svg[mynaui-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6.75c0-1.768 0-2.652.55-3.2C4.097 3 4.981 3 6.75 3s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 9.403 3 8.519 3 6.75m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 19.91 3 19.026 3 17.258M13.5 6.75c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2"></svg:path>`,
})
export class MynauiGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
